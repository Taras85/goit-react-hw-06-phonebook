import { createStore } from 'redux';

const reducer = (state, action) => {
  switch (action.type) {
    case 'addContacts':
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };

    case 'deleteContacts':
      return {
        ...state,
        contacts: action.payload,
      };
    case 'filter':
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};

export const store = createStore(reducer, {
  filter: '',
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '+38(059)111-11-11' },
    { id: 'id-2', name: 'Hermione Kline', number: '+38(059)222-22-22' },
    { id: 'id-3', name: 'Eden Clements', number: '+38(059)333-33-33' },
    { id: 'id-4', name: 'Annie Copeland', number: '+38(059)444-44-44' },
  ],
});

console.log('Store:', store);

// store.dispatch({
//   type: 'contacts',
//   payload:
//   {
//     id: 'id-5',
//     name: 'Taras Panasenko',
//     number: '335-36-85',
//   },
// });

// store.dispatch({
//   type: 'filter',
//   payload: 'banana',
//     payload: '',
// });

// console.log(store.getState());

// export default store
