import Home from "../pages/Home.vue";
import Books from "../pages/Books.vue";
import Authors from "../pages/Authors.vue";

export default [
  {
    path: "",
    component: Home,
  },
  {
    path: "/books",
    component: Books,
  },
  {
    path: "/authors",
    component: Authors,
  },
];
