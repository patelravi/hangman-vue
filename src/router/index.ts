import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Hangman from "../pages/hangman/hangman.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Hangman",
    component: Hangman,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
