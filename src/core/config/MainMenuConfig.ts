export interface MenuItem {
  heading?: string;
  sectionTitle?: string;
  route?: string;
  pages?: Array<MenuItem>;
  keenthemesIcon?: string;
  bootstrapIcon?: string;
  sub?: Array<MenuItem>;
}

const MainMenuConfig: Array<MenuItem> = [

  {
    heading: "Painel do Gestor",
    route: "/dashboard",
    pages: [
      {
        sectionTitle: "Painel do Gestor",
        route: "/widgets",
        keenthemesIcon: "element-7",
        bootstrapIcon: "bi-layers",
        sub: [
          {
            heading: "Dashboard",
            route: "/dashboard",
          },
          {
            heading: "Análise de Mercado",
            route: "/marketAnalysis",
          },
          {
            heading: "Acompanhamento de Metas",
            route: "/monitoringGoals",
          },
          {
            heading: "Análise de Metas Atualizado",
            route: "/updatedGoalAnalysis",
          },
          {
            heading: "Análise de Empresa",
            route: "/companyAnalysis",
          },
          {
            heading: "Análise de Rede",
            route: "/networkAnalysis",
          },
          {
            heading: "Análise de Regional",
            route: "/regionalAnalysis",
          },
        ],
      },
    ],
  },
];

export default MainMenuConfig;
