import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/gallery",
      name: "gallery",
      component: () =>
        import(/* webpackChunkName: "gallery" */ "./views/Gallery.vue")
    },
    {
      path: "/todo",
      name: "todo",
      component: () => import(/* webpackChunkName: "todo" */ "./views/Todo.vue")
    },
    {
      path: "*",
      name: "NotFound",
      component: () =>
        import(/* webpackChunkName: "notFound" */ "./views/NotFound.vue")
    }
  ]
});
