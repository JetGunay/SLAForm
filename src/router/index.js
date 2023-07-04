import { createRouter, createWebHistory } from "vue-router";
import firebase from "firebase/compat/app";
// import "firebase/compath/auth";
// import db from "@/firebase/init";

const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: HomeView,
  // },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
  {
    path: "/",
    name: "dashboard",
    component: () => import("../views/DashboardView.vue"),
    meta: {
      auth: true,
      title: "Dashboard",
    },
  },
  {
    path: "/signin",
    name: "signin",
    component: () => import("../views/SigninView.vue"),
    meta: {
      title: "Sign In",
    },
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("../views/SignupView.vue"),
    meta: {
      title: "Sign Up",
    },
  },
  {
    path: "/forgotpassword",
    name: "forgotpassword",
    component: () => import("../views/ForgotPassword.vue"),
    meta: {
      title: "Forgot Password",
    },
  },
  {
    path: "/form",
    name: "form",
    component: () => import("../views/SLAForm.vue"),
    meta: {
      auth: true,
      title: "Form",
    },
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/ProfileView.vue"),
    meta: {
      auth: true,
      title: "Profile",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach(async (to, from, next) => {
//   let user = firebase.auth().currentUser;
//   if (to.matched.some((res) => res.meta.auth)) {
//     if (user) {
//       next();
//     } else {
//       next({ path: "/signup" });
//     }
//     next();
//   }
//   next();
//   document.title = to.meta.title;
//   // }
// });

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  if (requiresAuth && !firebase.auth().currentUser) {
    next({ path: "/signup" });
  } else {
    next();
  }
});

export default router;
