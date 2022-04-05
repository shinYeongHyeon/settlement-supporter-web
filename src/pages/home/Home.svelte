<script lang="ts">
    import MainLayout from '../../layout/MainLayout.svelte';
    import GroupNotExistHome from './GroupNotExistHome.svelte';
    import GroupExistHome from './GroupExistHome.svelte';
    import { groups } from '../../store/group/group';

    function addGroup() {
        let createdGroupName = `groupName${$groups.length}`;
        $groups = [...$groups, {
            groupId: `randomId${$groups.length}`,
            groupName: createdGroupName,
        }];
        selectedGroup = createdGroupName;
    }

    let selectedGroup = '';
</script>

<MainLayout>
    {#if $groups.length === 0}
        <GroupNotExistHome addGroup={addGroup}/>
    {:else}
        <GroupExistHome
            addGroup={addGroup}
            selectedGroup={selectedGroup}
        />
    {/if}
</MainLayout>
