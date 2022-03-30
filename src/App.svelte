<script lang="ts">
  import { Router } from 'svelte-router-spa';

  import { routes } from './router/router';
</script>

<main>
    <Router {routes} />
</main>

<style>
    main {
        padding: 2em 1em;
    }
</style>