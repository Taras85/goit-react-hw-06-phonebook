// import {  useEffect, useState } from 'react';
import ContactForm  from './ContactForm/ContactForm';
import {ContactList}  from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import s from './App.module.css';
// import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
// import {    deleteContact } from 'store/actions';
import { changeFilter, createContact, deleteContact } from 'store/phonebookSlice';


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

  const {filter, contacts} = useSelector((state)=>state.phonebook)

  const dispatch = useDispatch()


const addContact = (name, number) => {
  // const contact = {
    // id: nanoid(),
    // name,
    // number,
  // };
  contacts.some(
    i =>
      // i.name.toLowerCase() === contact.name.toLowerCase() ||
    // i.number === contact.number
      i.name.toLowerCase() === name.toLowerCase()
  )
    ? alert(`${name}  is already in contacts`)
    : contacts.some(
    i =>
      i.number === number
  )
    ? alert(`${number} is already in contacts number`)
    :
      dispatch(createContact(name, number));
  };


 

  
    const onDeleteContact = id => {
    dispatch(deleteContact(id, contacts))
  };

  const onChangeFilter = e => {
  dispatch(changeFilter(e.target.value));
};

const filteredContacts = () => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
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