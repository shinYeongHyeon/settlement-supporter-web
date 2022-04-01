<script lang="ts">
  import { Headline, Subhead, Tabs } from 'attractions';

  import Group from '../interfaces/Group.ts';

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
        <Tabs
            name="groups"
            items={groups.map((group) => group.groupName)}
            bind:value={selectedGroup}
        />
    {/if}
</div>