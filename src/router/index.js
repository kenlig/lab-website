import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import LifePage from "../pages/LifePage.vue";
import CoursePage from "../pages/CoursePage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/course",
    name: "course",
    component: CoursePage,
  },
  {
    path: "/life",
    name: "life",
    component: LifePage,
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
