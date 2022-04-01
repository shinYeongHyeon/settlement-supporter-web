<script lang="ts">
    import { Headline, Subhead, Tabs } from 'attractions';

    import Group from '../interfaces/Group.ts';
    import SSWButton from '../component/SSWButton/SSWButton.svelte';
    import SSWFlexBox from '../layout/SSWFlexBox/SSWFlexBox.svelte';

    const groups: Group[] = [
        {
            groupId: '1',
            groupName: '그룹1',
        },
        {
            groupId: '2',
            groupName: '그룹2',
        }
    ];

    let selectedGroup = '';
</script>

<div>
    {#if groups.length === 0}
        <Headline>정산하기</Headline>
        <Subhead>그룹을 추가하여 정산을 진행하세요</Subhead>
    {:else}
        <Headline>정산하기</Headline>
        <SSWFlexBox y_center>
            <Tabs
                name="groups"
                items={groups.map((group) => group.groupName)}
                bind:value={selectedGroup}
            /> &nbsp;
            <SSWButton
                filled
                small
                message="+ 추가하기"
            />
        </SSWFlexBox>
    {/if}
</div>

<style>
    .flex-box {
        display: flex;
        align-items: center;
    }
</style>