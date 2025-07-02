import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Blogs from '../views/Blogs.vue';
import RightSidebar from '../components/RightSidebar.vue';
import BlogRightSidebar from '../components/BlogRightSidebar.vue';
import Category from '../components/Category.vue';
import LifecycleHooks from '../components/LifecycleHooks.vue';

const routes = [

  { 
    path: '/', 
    component: Home,
    name:'home'

   },

  { 
    path: '/about', 
    components: {
      default : About,
      right : RightSidebar
    },
    name:'about' 
  },

  { 
    path: '/blogs', 
    components: {
      default : Blogs,
      right : BlogRightSidebar
    },
    name:'blogs' 
  },
 
  { 
    path: '/blogs/tag/:category', 
    components: {
      default : Category,
      right : BlogRightSidebar
    },
    name:'tags' 
  },

  { 
    path: '/lifecyclehook',
    component: LifecycleHooks, 
    name:'lifecyclehook'
  },
  { 
    path: '/contact-us',
    component: Contact, 
    name:'contact'
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
