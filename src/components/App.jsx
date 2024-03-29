import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import s from './App.module.css';

import { useDispatch, useSelector } from 'react-redux';

import {
  changeFilter,
  createContact,
  deleteContact,
} from 'store/phonebookSlice';

const App = () => {
  const { filter, contacts } = useSelector(state => state.phonebook);

  const dispatch = useDispatch();

  const addContact = (name, number) => {
    contacts.some(i => i.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name}  is already in contacts`)
      : contacts.some(i => i.number === number)
      ? alert(`${number} is already in contacts number`)
      : dispatch(createContact(name, number));
  };

  const onDeleteContact = id => {
    dispatch(deleteContact(id, contacts));
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
      <Filter onChangeFilter={onChangeFilter} value={filter} />
      <ContactList
        onDeleteContact={onDeleteContact}
        contacts={filteredContacts()}
      />
    </div>
  );
};

export default App;
