import Home from '../pages/Home.svelte';
import Login from '../pages/Login.svelte';
import NotFoundPages from '../pages/NotFoundPages.svelte';

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