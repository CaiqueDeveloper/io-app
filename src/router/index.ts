import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { useConfigStore } from "@/stores/config";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/dashboard",
    component: () => import("@/layouts/main-layout/MainLayout.vue"),
    meta: {
      middleware: "auth",
    },
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/views/manager-panel/Dashboard.vue"),
        meta: {
          pageTitle: "Dashboard",
          breadcrumbs: ["Dashboards"],
        },
        
      },
      {
        path: "/marketAnalysis",
        name: "marketAnalysis",
        component: () => import("@/views/manager-panel/MarketAnalysis.vue"),
        meta: {
          breadcrumbs: ["Market Analysis"],
          pageTitle: "Análise de Mercado",
       },
      },
      {
        path: "/monitoringGoals",
        name: "monitoringGoals",
        component: () => import("@/views/manager-panel/MonitoringGoals.vue"),
        meta: {
          breadcrumbs: ["Monitoring Goals"],
          pageTitle: "Análise de Metas",
       },
      },
      {
        path: "/updatedGoalAnalysis",
        name: "updatedGoalAnalysis",
        component: () => import("@/views/manager-panel/UpdatedGoalAnalysis.vue"),
        meta: {
          breadcrumbs: ["Updated Goal Analysis"],
          pageTitle: "Análise de Metas Atualizado",
       },
      },
      {
        path: "/companyAnalysis",
        name: "companyAnalysis",
        component: () => import("@/views/manager-panel/CompanyAnalysis.vue"),
        meta: {
          breadcrumbs: ["Company Analysis"],
          pageTitle: "Análise de Empresa",
       },
      },
      {
        path: "/marketAnalysis",
        name: "marketAnalysis",
        component: () => import("@/views/manager-panel/MarketAnalysis.vue"),
        meta: {
          breadcrumbs: ["Market Analysis"],
          pageTitle: "Análise de Mercado",
       },
      },
      {
        path: "/networkAnalysis",
        name: "networkAnalysis",
        component: () => import("@/views/manager-panel/NetworkAnalysis.vue"),
        meta: {
          breadcrumbs: ["Network Analysis"],
          pageTitle: "Análise de Rede",
       },
      },
      {
        path: "/regionalAnalysis",
        name: "regionalAnalysis",
        component: () => import("@/views/manager-panel/RegionalAnalysis.vue"),
        meta: {
          breadcrumbs: ["Regional Analysis"],
          pageTitle: "Análise de Regional",
       },
      },
    ],
  },
  {
    path: "/",
    component: () => import("@/layouts/AuthLayout.vue"),
    children: [
      {
        path: "/sign-in",
        name: "sign-in",
        component: () =>
          import("@/views/crafted/authentication/basic-flow/SignIn.vue"),
        meta: {
          pageTitle: "Sign In",
        },
      },
      {
        path: "/sign-up",
        name: "sign-up",
        component: () =>
          import("@/views/crafted/authentication/basic-flow/SignUp.vue"),
        meta: {
          pageTitle: "Sign Up",
        },
      },
      {
        path: "/password-reset",
        name: "password-reset",
        component: () =>
          import("@/views/crafted/authentication/basic-flow/PasswordReset.vue"),
        meta: {
          pageTitle: "Password reset",
        },
      },
    ],
  },
  {
    path: "/multi-step-sign-up",
    name: "multi-step-sign-up",
    component: () =>
      import("@/views/crafted/authentication/MultiStepSignUp.vue"),
    meta: {
      pageTitle: "Multi-step Sign up",
    },
  },
  {
    path: "/",
    component: () => import("@/layouts/SystemLayout.vue"),
    children: [
      {
        // the 404 route, when none of the above matches
        path: "/404",
        name: "404",
        component: () => import("@/views/crafted/authentication/Error404.vue"),
        meta: {
          pageTitle: "Error 404",
        },
      },
      {
        path: "/500",
        name: "500",
        component: () => import("@/views/crafted/authentication/Error500.vue"),
        meta: {
          pageTitle: "Error 500",
        },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const configStore = useConfigStore();

  // current page view title
  document.title = `${to.meta.pageTitle} - ${import.meta.env.VITE_APP_NAME}`;

  // reset config to initial state
  configStore.resetLayoutConfig();

  // verify auth token before each page change
  authStore.verifyAuth();

  // before page access check if page requires authentication
  if (to.meta.middleware == "auth") {
    if (authStore.isAuthenticated) {
      next();
    } else {
      next({ name: "sign-in" });
    }
  } else {
    next();
  }

  // Scroll page to top on every route change
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

export default router;
