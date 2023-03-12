import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/HomePage.vue";
import Post from "./views/PostPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/posts/:id",
    name: "Post",
    component: Post,
    props: true,
  },
];
