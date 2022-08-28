import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { Form, Filter, ContactList } from './index';
import s from './app.module.scss';

const PARSED_DATA = JSON.parse(localStorage.getItem('contacts'));

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addNewContact = data => {
    const newItem = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    const contactExist = contacts.some(
      ({ name, number }) => name === newItem.name || number === newItem.number
    );
    if (contactExist) {
      alert(`${newItem.name} is already exist in your contact list`);
    } else {
      setContacts(prevState => [...prevState, newItem]);
    }
  };

  const onHandleFilter = e => {
    setFilter(e.target.value);
  };

  const onHandleVisibleContacts = () => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const onHandleDelete = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  useEffect(() => {
    if (!PARSED_DATA) {
      setContacts(PARSED_DATA);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={s.app}>
      <h2>Phonebook</h2>
      <Form onSubmit={addNewContact} />

      <h2>Contacts</h2>
      <Filter filterEl={filter} onChange={onHandleFilter} />
      <ContactList
        contacts={onHandleVisibleContacts()}
        onDeleteContact={onHandleDelete}
      />
    </div>
  );
}
