import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Guide from "../views/About/Guide.vue"
import Reference from "../views/About/Reference.vue"
import Changelog from "../views/About/Changelog.vue"
import GitHub from "../views/About/GitHub.vue"
import AboutHome from "../views/About/index.vue"
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // 動態載入用在大型較複雜時在使用，否則使用一般的即可
    // component: () => import("../views/About.vue"),
    component:About,
    children:[
    {
      path:"",
      component:AboutHome
    },
    {
      path:"guide",
      component:Guide
    },
    {
      path:"reference",
      component:Reference
    },
    {
      path:"changelog",
      component:Changelog
    },
    {
      path:"github",
      component:GitHub
    },
  ]
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
