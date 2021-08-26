import { createWebHistory, createRouter } from "vue-router";
import Home from '../views/home.vue'
import Dash1 from '../views/dash1.vue'
import User from '../views/user.vue'
import App1 from '../views/myapp1.vue'

const routes = [
    { 
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/dashboard1",
      name: "Dash",
      component: Dash1
    },
    {
      path: "/user",
      name: "User",
      component: User
    },
    {
      path: "/myapp1",
      name: "App1",
      component: App1
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;