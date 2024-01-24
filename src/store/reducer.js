import { combineReducers } from 'redux';
import { initialState } from './initialState';
// import { ADDCONTACTS, DELETECONTACTS, FILTER } from './types';
import { createReducer } from '@reduxjs/toolkit';
import { changeFilter, createContact, deleteContact } from './actions';

// const phonebookReducer = createReducer(initialState.phonebook, {
  // [createContact]: (state, action) => ({
    // ...state,
    // contacts: [...state.contacts, { ...action.payload }],
  // }),
//     [deleteContact]: (state, action) => ({
        // ...state,
        // contacts: action.payload,
//   }),
//      [changeFilter]: (state, action) => ({
        // ...state,
        // filter: action.payload,
//       }),
// })

const phonebookReducer = createReducer(initialState.phonebook, (builder) => {
  builder.addCase(createContact, (state, action) => ({
    ...state,
    contacts: [...state.contacts, { ...action.payload }],
  }))
    
  .addCase(deleteContact, (state, action) => ({
    ...state,
    contacts: action.payload,
  }))
    .addCase(changeFilter, (state, action) => ({
        ...state,
        filter: action.payload,
  }))

 })



// const phonebookReducer = (state=initialState.phonebook, action) => {
//   switch (action.type) {
//     case ADDCONTACTS:
//       return {
//         ...state,
//         contacts: [...state.contacts, { ...action.payload }],
//       };

//     case DELETECONTACTS:
      // return {
      //   ...state,
      //   contacts: action.payload,
      // };
//     case FILTER:
      // return {
      //   ...state,
      //   filter: action.payload,
      // };

//     default:
//       return state;
//   }
// };

export const reducer = combineReducers({
    phonebook: phonebookReducer,
    
});
