import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import NoirBlancView from "../views/NoirBlancView.vue";
import ColorView from "../views/ColorView.vue";
import Contact from "../views/ContactView.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/noir_blanc", component: NoirBlancView },
  { path: "/color", component: ColorView },
  { path: "/contact", component: Contact },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
