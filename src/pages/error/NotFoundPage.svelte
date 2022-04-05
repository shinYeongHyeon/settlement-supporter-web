<script>
  import { Headline, Subhead } from 'attractions';

  import RedirectHome from '../../component/RedirectToHome.svelte';
</script>

<div>
    <Headline>Oops..</Headline>
    <Subhead>
        I think you access wrong URL... T.T<br />
        <RedirectHome message="Back to home"/>
    </Subhead>
</div>