<script lang="ts">
    import { Router } from 'svelte-router-spa';

    import { routes } from './router/router';
</script>

<main>
    <Router {routes} />
</main>
