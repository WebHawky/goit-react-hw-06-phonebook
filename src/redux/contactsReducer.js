import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContacts } from './contactsActions';
import initialContacts from '../contacts.json';

const initalState = {
    items: initialContacts,
    filter: '',
};

const contacts = createReducer(initalState, {
    [addContact]: (state, action) => {
        state.items.unshift(action.payload);
        console.log('state: ', state);
    },
    [deleteContact]: (state, action) => {
        state.items = state.items.filter(
            contact => contact.id !== action.payload
        );
    },
    [filterContacts]: (state, action) => {
        state.filter = action.payload;
    },
});

export default contacts;
