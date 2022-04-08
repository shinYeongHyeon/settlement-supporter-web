import type GroupMember from './GroupMember';
import type Settlement from "./Settlement";

interface Group {
  groupId: string;
  groupName: string;
  members?: GroupMember[];
  settlements?: Settlement[];
}

export default Group;
