import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";

export interface User {
  name: string;
  surname: string;
  email: string;
  hotel: object,
  hotels: object,
  networks: object,
  regionals: object,
  drawingMenu: object,
}

export const useAuthStore = defineStore("auth", () => {
  const errors = ref({});
  const user = ref<User>({} as User);
  const isAuthenticated = ref(!!JwtService.getToken());

  function setAuth(authUser: User) {

    isAuthenticated.value = true;
    user.value = authUser[0].user;
    user.value.hotel = authUser[0].hotel;
    user.value.hotels = authUser[0].hotels;
    user.value.networks = authUser[0].networks;
    user.value.regionals = authUser[0].regionals;
    user.value.drawingMenu = authUser[0].drawingMenu;
    errors.value = {};
    JwtService.saveToken(authUser[0].user.api_token);
  }

  function setError(error: any) {
    errors.value = { ...error };
  }

  function purgeAuth() {
    isAuthenticated.value = false;
    user.value = {} as User;
    errors.value = [];
    JwtService.destroyToken();
  }

  function login(credentials: User) {

    
    return ApiService.post("auth/login", credentials)
      .then(({ data }) => {
        setAuth(data);
      })
      .catch(({ response }) => {
        setError(response.data);
      });
  }

  function logout() {

    purgeAuth();

  }

  function register(credentials: User) {
    return ApiService.post("register", credentials)
      .then(({ data }) => {
        setAuth(data);
      })
      .catch(({ response }) => {
        setError(response.data.errors);
      });
  }

  function forgotPassword(email: string) {
    return ApiService.post("forgot_password", email)
      .then(() => {
        setError({});
      })
      .catch(({ response }) => {
        setError(response.data.errors);
      });
  }

  function verifyAuth() {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      ApiService.post("auth/verify_token", { api_token: JwtService.getToken() })
      .then((response) => {

          JwtService.saveToken(response.data.api_token);

        }).catch((response) => {
          setError(response.data);
          purgeAuth();
          
        });
    } else {
      purgeAuth();
    }
  }

  return {
    errors,
    user,
    isAuthenticated,
    login,
    logout,
    register,
    forgotPassword,
    verifyAuth,
  };
});
