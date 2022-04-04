import Home from '../pages/home/Home.svelte';
import Login from '../pages/login/Login.svelte';
import NotFoundPages from '../pages/error/NotFoundPages.svelte';

const routes = [
  {
    name: '/',
    component: Home,
  },
  { name: 'login', component: Login},
  {
    name: '404',
    path: '404',
    component: NotFoundPages
  }
]

export { routes }