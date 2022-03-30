<script>
  import { Label } from 'attractions';
  import { navigateTo } from 'svelte-router-spa';

  export let message = 'HOME';
</script>

<div on:click={() => navigateTo('/')}>
    <Label>{message}</Label>
</div>
