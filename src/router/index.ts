import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [

  {
    path: "/Chinese",
    component: () => import("../views/music/Chineses.vue")
  },
  {
    path: "/polular",
    component: () => import("../views/music/polular.vue")
  },
  {
    path: "/rockenroll",
    component: () => import("../views/music/rock.vue")
  },
  {
    path: "/ballad",
    component: () => import("../views/music/rock.vue")
  },
  {
    path: "/electric",
    component: () => import("../views/music/rock.vue")
  },
  {
    path: "/homework01",
    name: "homework01",
    component: () => import("../views/homework01/HomeWork01.vue"),
    children: [
      {
        path: "food",
        component: () => import("../views/homework01/Food.vue")
      },
      {
        props: true,
        path: "shop/:sid",
        component: () => import("../views/homework01/shop.vue")
      },
      {
        path: "order",
        component: () => import("../views/homework01/order.vue")
      },
      {
        path: "Local",
        component: () => import("../views/homework01/Location.vue")
      }
    ]
  },
  {
    path: "/example05",
    component: () => import("../views/Example05/Example05-02.vue")
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
