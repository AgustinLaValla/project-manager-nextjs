import { Entry } from "@/intefaces"

interface ADD_NEW_ENTRY {
  type: 'ADD_NEW_ENTRY';
  payload: Entry;
}

interface UPDATE_ENTRY {
  type: 'UPDATE_ENTRY';
  payload: Entry;
}

export type Action = ADD_NEW_ENTRY | UPDATE_ENTRY;