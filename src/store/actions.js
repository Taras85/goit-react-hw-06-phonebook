import { ADDCONTACTS, DELETECONTACTS, FILTER } from "./types";


export const createContact = contact => ({
  type: ADDCONTACTS,
  payload: contact,
});

export const changeFilter = value => ({
  type: FILTER,
  payload: value,
});

export const deleteContact = (id, contacts) => 
  ({
    type: DELETECONTACTS,
    payload: contacts.filter(contact => contact.id !== id),
  });
