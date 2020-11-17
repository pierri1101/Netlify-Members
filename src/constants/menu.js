import { adminRoot } from "./config";
import { UserRole } from "../utils/auth.roles";

const data = [
  //Primeiro Item do Menu
  /*{
    id: "painel",
    icon: "simple-icon-user",
    label: "Meu Painel",
    to: `${adminRoot}/piaf/start`
  },*/

//Segundo Item do Menu
{
  id: "Assinaturas",
  icon: "simple-icon-basket-loaded",
  label: "Assinaturas",
  to: `${adminRoot}/app/dashboards/default`,
  subs: [{
    id: "Nome da Assinatura",
    label: "Nome da Assinatura",
    to: "/user",
    subs: [{
      icon: "simple-icon-user-following",
      label: "Comece Por aqui",
      to: `${adminRoot}/pages/blog/blog-detail`,
    },
    {
      icon: "simple-icon-notebook",
      label: "Publicações",
      to: `${adminRoot}/#`,
    },
    {
      icon: "iconsminds-digital-drawing",
      label: "Carteira de Ações",
      to: `${adminRoot}/pages/profile/portfolio
      `,
    },
    {
      icon: "simple-icon-graduation",
      label: "Plantão de Dúvidas",
      to: `${adminRoot}/pages/profile/social`,
    }
    ]
  },
  ]
},

//Terceiro Item do Menu
/*{
  id: "cursos",
  icon: "iconsminds-digital-drawing",
  label: "Cursos",
  to: `${adminRoot}/app/dashboards/default`,
  subs: [{
    id: "Nome da Assinatura",
    label: "RE3X",
    to: "/user",
    subs: [{
      icon: "simple-icon-user-following",
      label: "Comece Por aqui",
      to: `${adminRoot}/pages/blog/blog-detail`,
    },
    {
      icon: "simple-icon-notebook",
      label: "Aulas & Módulos",
      to: `${adminRoot}/dashboards/default`,
    },
    {
      icon: "iconsminds-monitor---phone",
      label: "Material Suporte",
      to: `${adminRoot}/pages/profile/portfolio
      `,
    },
    {
      icon: "simple-icon-graduation",
      label: "Plantão de Dúvidas",
      to: `${adminRoot}/pages/profile/social`,
    }
    ],
  },
  ],

},*/

//Quarto Item do Menu
{
  id: "mochila",
  icon: "iconsminds-library",
  label: "Mochila",
  to: `${adminRoot}/app/dashboards/default`,
  subs: [{
      icon: "simple-icon-book-open",
      label: "Sugestão de Livros",
      to: `${adminRoot}/mochila/livros`,
    },
    {
      icon: "iconsminds-line-chart-1",
      label: "Corretora de Valores",
      to: `${adminRoot}/mochila/corretoras`,
    },
    {
      icon: "simple-icon-notebook",
      label: "Planilhas Gerenciais",
      to: `${adminRoot}/mochila/planilhas`,
    },
    {
      icon: "simple-icon-graduation",
      label: "Suporte ao Cliente",
      to: `${adminRoot}/mochila/suporte`,
    },
    ]
  },
  ];
export default data;
