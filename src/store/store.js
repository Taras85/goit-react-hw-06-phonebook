import { createStore } from 'redux';

const reducer = (state, action) => {
  switch (action.type) {
    case 'addContacts':
      return {
        ...state,
        contacts: [...state.contacts, action.payload]}
        ;
    
    case 'deleteContacts':
            return {
        ...state, contacts:action.payload
        }
        ;
    case 'filter':
      return {
        ...state, filter:action.payload
        }
        ;

    default:
      return state;
  }
};

export const store = createStore(reducer, {
  filter: '',
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
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