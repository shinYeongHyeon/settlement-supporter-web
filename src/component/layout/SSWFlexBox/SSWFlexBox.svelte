<script lang="ts">
    export let y_stretch = false;
    export let y_flex_start = false
	export let y_flex_end = false;
    export let y_center = false;
    export let y_baseline = false;

	let y_style = null;

	if (y_stretch) {
	    y_style = 'stretch';
	} else if (y_flex_start) {
	    y_style = 'flex-start';
	} else if (y_flex_end) {
        y_style = 'flex-end';
    } else if (y_center) {
	    y_style = 'center';
	} else if (y_baseline) {
	    y_style = 'baseline';
	}

	// TODO: Add Flex Style
</script>

<div
	style:display="flex"
	style:align-items={y_style}
	{...$$restProps}
>
	<slot></slot>
</div>
