<script lang="ts">
    import MainLayout from '../../layout/MainLayout.svelte';
    import Group from '../../interfaces/Group.ts';
    import GroupNotExistHome from './GroupNotExistHome.svelte';
    import GroupExistHome from './GroupExistHome.svelte';

    function addGroup() {
        alert('click AddGroup');
    }

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

<MainLayout>
    {#if groups.length === 0}
        <GroupNotExistHome />
    {:else}
        <GroupExistHome
            groups={groups}
            addGroup={addGroup}
        />
    {/if}
</MainLayout>
