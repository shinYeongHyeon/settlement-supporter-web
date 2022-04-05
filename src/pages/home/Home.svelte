<script lang="ts">
    import MainLayout from '../../layout/MainLayout.svelte';
    import HomeWhenNotExistGroup from './HomeWhenNotExistGroup.svelte';
    import HomeWhenExistGroup from './HomeWhenExistGroup.svelte';
    import { groups } from '../../store/group/group';

    let selectedGroupName = '';
    let selectedGroupIndex = -1;
    let selectedGroup = null;

    function addGroup() {
        let createdGroupName = `groupName${$groups.length}`;
        selectedGroupName = createdGroupName;
        selectedGroupIndex = $groups.length;
        selectedGroup = {
            groupId: `randomId${$groups.length}`,
            groupName: createdGroupName,
            members: [],
        };

        $groups = [...$groups, selectedGroup];
    }

    function addMember() {
        $groups[selectedGroupIndex].members = [...$groups[selectedGroupIndex].members, {
            memberId: `randomMemberId${$groups[selectedGroupIndex].members.length}`,
            memberName: `randomMemberName${$groups[selectedGroupIndex].members.length}`,
        }];

        selectedGroup = selectedGroup;
    }

    function onChangeTab(selectedTab: any) {
        selectedGroupName = selectedTab.detail.value;
        selectedGroupIndex = $groups.findIndex((group) => group.groupName === selectedGroupName);
        selectedGroup = $groups[selectedGroupIndex];
    }
</script>

<MainLayout>
    {#if $groups.length === 0}
        <HomeWhenNotExistGroup addGroup={addGroup}/>
    {:else}
        <HomeWhenExistGroup
            addGroup={addGroup}
            selectedGroupName={selectedGroupName}
            selectedGroup={selectedGroup}
            addMember={addMember}
            onChangeTab={onChangeTab}
        />
    {/if}
</MainLayout>
