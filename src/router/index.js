import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import NewsPage from "../pages/NewsPage.vue";
import JoinPage from "../pages/JoinPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/join",
    name: "join",
    component: JoinPage,
  },
  {
    path: "/cert",
    name: "cert",
    component: () =>
      import(/* webpackChunkName: "cert" */ "../pages/CertPage.vue"),
  },
  {
    path: "/management",
    name: "manage",
    component: () => import("../pages/ManagePage.vue"),
  },
  {
    path: "/news",
    name: "news",
    component: NewsPage,
  },
  {
    path: "/news/:id",
    name: "news-detail",
    component: () =>
      import(/* webpackChunkName: "news" */ "../pages/Details/NewsDetail.vue"),
  },
  {
    path: "/course",
    name: "course",
    component: () =>
      import(/* webpackChunkName: "course" */ "../pages/CoursePage.vue"),
  },
  {
    path: "/team",
    name: "team",
    component: () =>
      import(/* webpackChunkName: "team" */ "../pages/TeamPage.vue"),
  },
  {
    path: "/research",
    name: "research",
    component: () =>
      import(/* webpackChunkName: "research" */ "../pages/ResearchPage.vue"),
  },
  {
    path: "/project/:id",
    name: "project-detail",
    component: () =>
      import(
        /* webpackChunkName: "project" */ "../pages/Details/ProjectDetail.vue"
      ),
  },
  {
    path: "/teacher/:id",
    name: "teacher-detail",
    component: () =>
      import(
        /* webpackChunkName: "teacher" */ "../pages/Details/TeacherDetail.vue"
      ),
  },
  {
    path: "/life",
    name: "life",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "life" */ "../pages/LifePage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
