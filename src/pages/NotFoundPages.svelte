<script>
    import { Headline, Subhead } from 'attractions';
    import { navigateTo } from 'svelte-router-spa';

    function backToHome() {
      navigateTo('/');
    }
</script>

<div>
    <Headline>Oops..</Headline>
    <Subhead>
        I think you access wrong URL... T.T<br />
        <span on:click={backToHome}>Back to HOME</span>
    </Subhead>
</div>