import { Component } from 'react';
import { nanoid } from 'nanoid';

import { Form, Filter, ContactList } from './index';
import s from './app.module.scss';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addNewContact = data => {
    const newItem = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    const contactExist = this.state.contacts.some(
      ({ name, number }) => name === newItem.name || number === newItem.number
    );
    if (contactExist) {
      alert(`${newItem.name} is already exist in your contact list`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newItem],
      }));
    }
  };

  onHandleFilter = e => {
    this.setState({ filter: e.target.value });
  };

  onHandleVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  // onHandleDelete = contactId => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
  //   }));
  // };

  onHandleDelete = contactId => {
    console.log(contactId);
    this.setState(({ contacts }) => {
      const newContacts = contacts.filter(contact => contact.id !== contactId);

      return {
        contacts: newContacts,
      };
    });
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.onHandleVisibleContacts();
    return (
      <div className={s.app}>
        <h2>Phonebook</h2>
        <Form onSubmit={this.addNewContact} />

        <h2>Contacts</h2>
        <Filter filterEl={filter} onChange={this.onHandleFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.onHandleDelete}
        />
      </div>
    );
  }
}
export default App;
