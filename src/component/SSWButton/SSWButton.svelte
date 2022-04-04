<script>
    import { createEventDispatcher } from 'svelte';
	import { Button } from 'attractions';

    const dispatch = createEventDispatcher();

	export let message = '';

    const onClick = () => {
        dispatch('click');
    };
</script>

<Button {...$$restProps} style="margin: 0" on:click={onClick}>{message}</Button>
