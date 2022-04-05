import { writable } from 'svelte/store';

import type Group from "../../interfaces/Group";

const initialGroups: Group[] = [];
export const groups = writable(initialGroups);