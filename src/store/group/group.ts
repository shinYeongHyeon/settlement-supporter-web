import { writable } from 'svelte/store';

import type Group from "../../interfaces/Group";

const initialGroups: Group[] = [{
    groupId: '1',
    groupName: 'test',
}];
export const groups = writable(initialGroups);