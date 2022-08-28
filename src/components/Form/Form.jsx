import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import s from './form.module.scss';

export default function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const onHandleSubmit = e => {
    e.preventDefault();

    onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setName = '';
    setNumber = '';
  };
  const id = { nanoid };

  return (
    <div>
      <form onSubmit={onHandleSubmit} className={s.container}>
        <label htmlFor={id} className={s.title}>
          Name
        </label>
        <input
          className={s.new_input}
          id={id}
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor={id} className={s.title}>
          Phone
        </label>
        <input
          className={s.new_input}
          type="tel"
          id={id}
          value={number}
          onChange={handleChange}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit" className={s.button}>
          Add contact
        </button>
      </form>
    </div>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
