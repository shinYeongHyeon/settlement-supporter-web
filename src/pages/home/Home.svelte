<script lang="ts">
    import MainLayout from '../../layout/MainLayout.svelte';
    import GroupNotExistHome from './GroupNotExistHome.svelte';
    import GroupExistHome from './GroupExistHome.svelte';
    import { groups } from '../../store/group/group';

    function addGroup() {
        $groups = [...$groups, {
            groupId: `randomId${$groups.length}`,
            groupName: `groupName${$groups.length}`,
        }];
    }
</script>

<MainLayout>
    {#if $groups.length === 0}
        <GroupNotExistHome />
    {:else}
        <GroupExistHome
            addGroup={addGroup}
        />
    {/if}
</MainLayout>
