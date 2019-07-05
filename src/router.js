import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import AddJobsForm from "./views/AddJobsForm.vue";
console.log("hello");
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
      path: "/jobs/create",
      name: "create",
      component: AddJobsForm
    }
  ]
});
