import Home from "../pages/Home.vue";
import Books from "../pages/Books.vue";
import Book from "../pages/Book.vue";
import Authors from "../pages/Authors.vue";
import Author from "../pages/Author.vue";

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
  {
    path: "/book/:name",
    component: Book,
  },
  {
    path: "/author/:name",
    component: Author,
  },
];
