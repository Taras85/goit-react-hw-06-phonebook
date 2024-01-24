import { combineReducers } from 'redux';
import { initialState } from './initialState';
import { ADDCONTACTS, DELETECONTACTS, FILTER } from './types';

const phonebookReducer = (state=initialState.phonebook, action) => {
  switch (action.type) {
    case ADDCONTACTS:
      return {
        ...state,
        contacts: [...state.contacts, { ...action.payload }],
      };

    case DELETECONTACTS:
      return {
        ...state,
        contacts: action.payload,
      };
    case FILTER:
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};

export const reducer = combineReducers({
    phonebook: phonebookReducer,
    
});
