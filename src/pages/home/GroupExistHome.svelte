<script lang="ts">
    import { Headline, Tabs } from 'attractions';

    import SSWFlexBox from '../../component/layout/SSWFlexBox/SSWFlexBox.svelte';
    import SSWButton from '../../component/SSWButton/SSWButton.svelte';
    import { groups } from '../../store/group/group';

    export let addGroup: () => void;
    export let selectedGroupName = '';
    export let selectedGroup = null;
    export let addMember: () => void;
    export let onChangeTab: (value) => void;
</script>

<div>
	<Headline>정산하기</Headline>
	<SSWFlexBox y_center>
		<Tabs
			name="groups"
			items={$groups.map((group) => group.groupName)}
			bind:value={selectedGroupName}
			on:change={onChangeTab}
		/> &nbsp;
		<SSWButton
			filled
			small
			message="+ 추가하기"
			on:click={addGroup}
		/>
	</SSWFlexBox>
	<SSWFlexBox y_center>
		{#if selectedGroup.members.length === 0}
			그룹에 속한 인원이 없습니다.
			추가해주세요.
		{:else}
			그룹원 :
			{#each selectedGroup.members as groupMember}
				<!--TODO: 그룹멤버 컴포넌트-->
				{groupMember.memberName}&nbsp;
			{/each}
		{/if}
		<SSWButton message="+ 그룹 인원 추가하기" on:click={addMember} />
	</SSWFlexBox>
</div>