import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import FriendsView from '../views/FriendsView.vue';
import MessagesView from '../views/MessagesView.vue';
import FavsView from '../views/FavsView.vue';
import AboutView from '../views/AboutView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/friends',
    name: 'friends',
    component: FriendsView,
  },
  {
    path: '/messages',
    name: 'messages',
    component: MessagesView,
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: FavsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
