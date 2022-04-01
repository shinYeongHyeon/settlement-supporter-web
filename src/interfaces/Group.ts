import type GroupMember from './GroupMember';

interface Group {
  groupId: string;
  groupName: string;
  members?: GroupMember[];
}

export default Group;
