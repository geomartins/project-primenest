import Vue from "vue";
import VueRouter from "vue-router";
import Welcome from "../views/Welcome.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue")
  },
  {
    path: "/faq",
    name: "Faq",
    component: () => import("../views/Faq.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: "/property",
    name: "Property",
    component: () => import("../views/Property.vue")
  },
  {
    path: "/property_details/:name",
    name: "PropertyDetails",
    component: () => import("../views/PropertyDetails.vue")
  },
  {
    path: "/application",
    name: "Application",
    component: () => import("../views/Application.vue")
  },
  {
    path: "/404",
    name: "Error",
    component: () => import("../views/Error.vue")
  },
  {
    path: "/bricks-court-ifo",
    name: "BricksCourtIfo",
    component: () => import("../views/Ifo.vue")
  },
  {
    path: "/bricks-court-sagamu",
    name: "BricksCourtSagamu",
    component: () => import("../views/Sagamu.vue")
  },
  {
    path: "/lily-court-2bed",
    name: "LilyCourtEstate2",
    component: () => import("../views/Lily-2bed.vue")
  },
  {
    path: "/lily-court-3bed",
    name: "LilyCourtEstate3",
    component: () => import("../views/Lily-3bed.vue")
  },
  { path: '*', redirect: '/404'},
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
