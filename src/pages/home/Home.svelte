<script lang="ts">
    import Group from '../../interfaces/Group.ts';
    import GroupNotExistHome from './GroupNotExistHome.svelte';
    import GroupExistHome from './GroupExistHome.svelte';

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
</script>

<div>
    {#if groups.length === 0}
        <GroupNotExistHome />
    {:else}
        <GroupExistHome groups={groups} />
    {/if}
</div>
