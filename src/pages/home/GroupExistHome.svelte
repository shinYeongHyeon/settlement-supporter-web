<script lang="ts">
    import { Headline, Tabs } from 'attractions';

    import SSWFlexBox from '../../component/layout/SSWFlexBox/SSWFlexBox.svelte';
    import SSWButton from '../../component/SSWButton/SSWButton.svelte';
    import { groups } from '../../store/group/group';

    export let addGroup: () => void;

    let selectedGroup = '';
</script>

<div>
	<Headline>정산하기</Headline>
	<SSWFlexBox y_center>
		<Tabs
			name="groups"
			items={$groups.map((group) => group.groupName)}
			bind:value={selectedGroup}
		/> &nbsp;
		<SSWButton
			filled
			small
			message="+ 추가하기"
			on:click={addGroup}
		/>
	</SSWFlexBox>
</div>