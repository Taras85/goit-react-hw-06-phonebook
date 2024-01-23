// import {  useEffect, useState } from 'react';
import ContactForm  from './ContactForm/ContactForm';
import {ContactList}  from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import s from './App.module.css';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';

// const defaultContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ]


const App = () => {
  // const [filter, setFilter] = useState('');
  // const [contacts, setContacts] = useState(
  //   JSON.parse(localStorage.getItem('contacts')) ?? defaultContacts
  // );

  const {filter, contacts} = useSelector((state)=>state)


  const dispatch = useDispatch()


const addContact = (name, number) => {
  const contact = {
    id: nanoid(),
    name,
    number,
  };
  contacts.some(
    i =>
      i.name.toLowerCase() === contact.name.toLowerCase() ||
      i.number === contact.number
  )
    ? alert(`${name} is already in contacts`)
    : dispatch({type:'addContacts', payload: contact});
};

const onChangeFilter = e => {
  dispatch({type:'filter',payload: e.target.value});
};

const filteredContacts = () => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

  const onDeleteContact = id => {
    dispatch({type:'deleteContacts', payload: contacts.filter(contact => contact.id !== id)})
  };
  


    return (
      <div className={s.appContainer}>
        <h1 className={s.titlePhonebook}>Phonebook</h1>

        <ContactForm addContact={addContact} />

        <h2 className={s.titlePhonebook}>Contacts</h2>
        <Filter
          onChangeFilter={onChangeFilter}
          value={filter}
        />
        <ContactList

          onDeleteContact={onDeleteContact}
          contacts={filteredContacts()}
        />
      </div>
    );

}

export default App;