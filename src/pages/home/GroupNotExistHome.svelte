<script lang="ts">
    import { Headline, Subhead } from 'attractions';

    import SSWButton from '../../component/SSWButton/SSWButton.svelte';

    export let addGroup: () => void;
</script>

<div>
	<Headline>정산하기</Headline>
	<Subhead>그룹을 추가하여 정산을 진행하세요</Subhead>
	<SSWButton
		filled
		small
		message="+ 추가하기"
		on:click={addGroup}
	/>
</div>