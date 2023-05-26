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
  {
    heading: "Pickup",
    route: "/pickup",
    pages: [
      {
        sectionTitle: "Pickup",
        route: "/widgets",
        keenthemesIcon: "element-7",
        bootstrapIcon: "bi-layers",
        sub: [
          {
            sectionTitle: "Pickup Geral",
            route: "/forms",
            sub: [
              {
                heading: "Pickup Indicador Mensal",
                route: "/",
              },
              {
                heading: "Pickup Indicador Diário",
                route: "/",
              },
              {
                heading: "Pickup Indicador Completo",
                route: "/",
              },
              {
                heading: "Ritimo de Vendas",
                route: "/",
              },
              {
                heading: "Pickup Comparativa",
                route: "/",
              },
            ],
          }, {
            sectionTitle: "Pickup Canais",
            route: "/forms",
            sub: [
              {
                heading: "Pickup Canais Mensal",
                route: "/",
              },
              {
                heading: "Pickup Canais Diário",
                route: "/",
              },
              {
                heading: "Ritimo de Vendas - Canais",
                route: "/",
              },
              {
                heading: "Pickup Compartiva - Canais",
                route: "/",
              },
              {
                heading: "Pickup Segmento Mensal",
                route: "/",
              },
              {
                heading: "Pickup Segmento Diário",
                route: "/",
              },
              {
                heading: "Ritimo de Vendas Segmentos",
                route: "/",
              },
              {
                heading: "Pickup Comparativa Segmentos",
                route: "/",
              },
              {
                heading: "Pickup de Vendedores",
                route: "pickup/salesBySellers",
              },
            ],
          }, {
            heading: "Cancelamento",
            route: "/pickup/canceled",
          }, {
            heading: "Pickup Vendas Por Acomodações",
            route: "/pickup/salesByAccommodation",
          },
        ],
      },
    ],
  }, {
    heading: "Cocorrência",
    route: "/reatshopper",
    pages: [
      {
        sectionTitle: "Cocorrência",
        route: "/widgets",
        keenthemesIcon: "element-7",
        bootstrapIcon: "bi-layers",
        sub: [
          {
            heading: "Análise de Concorrência Online",
            route: "/reatshopper",
          },
          {
            heading: "Análise Retroativa (NOVA)",
            route: "/marketAnalysis",
          },
          {
            heading: "Análise de Rede",
            route: "/monitoringGoals",
          },
          {
            heading: "Análise Retroativa",
            route: "/updatedGoalAnalysis",
          }
        ],
      },
    ],
  }, {
    heading: "RMS",
    route: "/reatshopper",
    pages: [
      {
        sectionTitle: "RMS",
        route: "/widgets",
        keenthemesIcon: "abstract-26",
        bootstrapIcon: "bi-layers",
        sub: [
          {
            heading: "Flutuação Básica",
            route: "/reatshopper",
          },
          {
            heading: "Flutuação Personalizada",
            route: "/marketAnalysis",
          },
          {
            heading: "Flutuação Yield",
            route: "/monitoringGoals",
          },
          {
            heading: "Flutuação Completa",
            route: "/updatedGoalAnalysis",
          }, {
            heading: "Forecast",
            route: "/updatedGoalAnalysis",
          }, {
            heading: "Configuração de Flutuação",
            route: "/updatedGoalAnalysis",
          },
        ],
      },
    ],
  },{
    heading: "Tarifário",
    route: "/reatshopper",
    pages: [
      {
        sectionTitle: "Tarifário",
        route: "/widgets",
        keenthemesIcon: "element-7",
        bootstrapIcon: "bi-layers",
        sub: [
          {
            heading: "Tarifas Atuais",
            route: "/reatshopper",
          },
          {
            heading: "Construção Tarifária",
            route: "/marketAnalysis",
          },
          {
            heading: "Histórico das Tarifas",
            route: "/monitoringGoals",
          },
          {
            heading: "Dashboard Tarifário",
            route: "/updatedGoalAnalysis",
          }, {
            heading: "Meta Segmento /Canal Por Rede",
            route: "/updatedGoalAnalysis",
          }
        ],
      },
    ],
  },{
    heading: "Relatórios",
    route: "/reatshopper",
    pages: [
      {
        sectionTitle: "Relatórios",
        route: "/widgets",
        keenthemesIcon: "element-7",
        bootstrapIcon: "bi-layers",
        sub: [
          {
            heading: "Relatório de Ocupação",
            route: "/reatshopper",
          },
          {
            heading: "Relatório de Faturamento",
            route: "/marketAnalysis",
          },
          {
            heading: "Histórico de Flutuações",
            route: "/monitoringGoals",
          },
          {
            heading: "Relatório Produção Por Clientes",
            route: "/updatedGoalAnalysis",
          }, {
            heading: "Resumo de Estatística",
            route: "/updatedGoalAnalysis",
          },{
            heading: "Relatório Booking Listing",
            route: "/updatedGoalAnalysis",
          },{
            heading: "Indicadores Customizados",
            route: "/updatedGoalAnalysis",
          },{
            heading: "Relatório Destination Listing",
            route: "/updatedGoalAnalysis",
          },{
            heading: "Desenpenho Por Hotel",
            route: "/updatedGoalAnalysis",
          }
        ],
      },
    ],
  },{
    heading: "Configurações",
    route: "/reatshopper",
    pages: [
      {
        sectionTitle: "Configurações",
        route: "/widgets",
        keenthemesIcon: "element-7",
        bootstrapIcon: "bi-layers",
        sub: [
          {
            heading: "Geral",
            route: "/reatshopper",
          },
          {
            heading: "Omnibees",
            route: "/marketAnalysis",
          },
          {
            heading: "Módulos",
            route: "/monitoringGoals",
          },
          {
            heading: "Controle de Importação",
            route: "/updatedGoalAnalysis",
          }, {
            heading: "Feriados e Eventos",
            route: "/updatedGoalAnalysis",
          },{
            heading: "Gerenciador de Redes",
            route: "/updatedGoalAnalysis",
          },{
            heading: "Dicas IO",
            route: "/updatedGoalAnalysis",
          },{
            heading: "Tutorial",
            route: "/updatedGoalAnalysis",
          },{
            heading: "Permissões",
            route: "/updatedGoalAnalysis",
          },{
            heading: "Controle de Usabilidade",
            route: "/updatedGoalAnalysis",
          },{
            heading: "Mensagens",
            route: "/updatedGoalAnalysis",
          },{
            heading: "Tabela Mãe",
            route: "/updatedGoalAnalysis",
          },
        ],
      },
    ],
  },
];

export default MainMenuConfig;
