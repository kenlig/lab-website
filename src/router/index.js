import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import NewsPage from "../pages/NewsPage.vue";
import NewsDetail from "../pages/NewsDetail.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/news",
    name: "news",
    component: NewsPage,
  },
  {
    path: "/news/:id",
    name: "news-detail",
    component: NewsDetail,
  },
  {
    path: "/course",
    name: "course",
    component: () =>
      import(/* webpackChunkName: "course" */ "../pages/CoursePage.vue"),
  },
  {
    path: "/life",
    name: "life",
    component: () =>
      import(/* webpackChunkName: "life" */ "../pages/LifePage.vue"),
  },
  {
    path: "/join",
    name: "join",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "home" */ "../pages/JoinPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
