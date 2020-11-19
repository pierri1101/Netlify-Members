import Vue from "vue";
import VueRouter from "vue-router";
import AuthGuard from "./utils/auth.guard";
import { adminRoot } from "./constants/config";
import { UserRole } from "./utils/auth.roles";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("./views/home"),
    redirect: "/user/login"
  },
  {
    path: adminRoot,
    component: () => import("./views/app"),
    redirect: `${adminRoot}/dashboards`,
    meta: { loginRequired: true },

    children: [
      {
        path: "dashboards",
        component: () =>
          import(/* webpackChunkName: "dashboards" */ "./views/app/dashboards"),
        redirect: `${adminRoot}/dashboards/default`,
        // meta: { roles: [UserRole.Admin, UserRole.Editor] },
        children: [
          {
            path: "default",
            component: () =>
              import(/* webpackChunkName: "dashboards" */ "./views/app/dashboards/Default"),
            // meta: { roles: [UserRole.Admin] },
          }
        ]
      },
      {
        path: "pages",
        component: () =>
          import(/* webpackChunkName: "pages" */ "./views/app/pages"),
        redirect: `${adminRoot}/pages/product`,
        children: [
          {
            path: "blog",
            component: () =>
              import(/* webpackChunkName : "blog" */ "./views/app/pages/blog"),
            redirect: `${adminRoot}/pages/blog/blog-list`,
            children: [
              {
                path: "blog-list",
                component: () =>
                  import(/* webpackChunkName: "blog" */ "./views/app/pages/blog/BlogList")
              },
              {
                path: "blog-detail",
                component: () =>
                  import(/* webpackChunkName: "blog" */ "./views/app/pages/blog/BlogDetail")
              },
            ]
          },
        ]
      },
      {
        path: "mochila",
        component: () =>
        import("./views/app/mochila"),
        children: [
          {
            path: "livros",
            component: () =>
              import("./views/app/mochila/livros")
          },
          {
            path: "corretoras",
            component: () =>
              import("./views/app/mochila/corretoras")
          },
          {
            path: "planilhas",
            component: () =>
              import("./views/app/mochila/planilhas")
          },
          {
            path: "suporte",
            component: () =>
              import("./views/app/mochila/suporte")
          },
        ]
      },
      {
        path: "radar",
        component: () =>
        import("./views/app/radar"),
        children: [
          {
            path: "comece",
            component: () =>
              import("./views/app/radar/comece")
          },
          {
            path: "duvidas",
            component: () =>
              import("./views/app/radar/duvidas")
          },
        ]
      },
      {
        path: "admin",
        component: () =>
        import("./views/app/admin"),
        children: [
          {
            path: "index",
            component: () =>
              import("./views/app/admin/index")
          },
        ]
      },
    ]
  },

  {
    path: "/error",
    component: () => import(/* webpackChunkName: "error" */ "./views/Error")
  },
  {
    path: "/user",
    component: () => import(/* webpackChunkName: "user" */ "./views/user"),
    redirect: "/user/login",
    children: [
      {
        path: "login",
        component: () =>
          import(/* webpackChunkName: "user" */ "./views/user/Login")
      },
      {
        path: "forgot-password",
        component: () =>
          import(/* webpackChunkName: "user" */ "./views/user/ForgotPassword")
      },
    ]
  },
  {
    path: "*",
    component: () => import(/* webpackChunkName: "error" */ "./views/Error")
  },

];

const router = new VueRouter({
  linkActiveClass: "active",
  routes,
  mode: "history",
});
router.beforeEach(AuthGuard);
export default router;
