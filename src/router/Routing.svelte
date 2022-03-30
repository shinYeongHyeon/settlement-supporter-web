<script>
  import { Router, Link, Route } from 'svelte-routing';

  import Login from '../pages/Login.svelte';
  import Home from '../pages/Home.svelte';

  export let url = '';
</script>

<Router url="{url}">
    <nav>
        <Link to="/">Home</Link>
        <Link to="login">Login</Link>
    </nav>
    <div>
        <Route path="/"><Home /></Route>
        <Route path="login" component="{Login}" />
    </div>
</Router>