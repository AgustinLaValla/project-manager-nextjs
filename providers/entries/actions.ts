import { Entry } from "@/intefaces"

interface ADD_NEW_ENTRY {
  type: 'ADD_NEW_ENTRY';
  payload: Entry;
}

interface UPDATE_ENTRY {
  type: 'UPDATE_ENTRY';
  payload: Entry;
}

interface SET_ENTRIES {
  type: 'SET_ENTRIES',
   payload:  Entry[]
}

interface DELETE_ENTRY {
  type: 'DELETE_ENTRY',
   payload:  string
}

export type Action = ADD_NEW_ENTRY | UPDATE_ENTRY | SET_ENTRIES | DELETE_ENTRY;