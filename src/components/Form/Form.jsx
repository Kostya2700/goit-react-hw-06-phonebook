import React from 'react';
import css from '../Form/Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts, stateContacts } from 'redux/contactSlice';
import { nanoid } from 'nanoid';

function Form() {
  const dispatch = useDispatch();
  const arrContacts = useSelector(stateContacts);
  const formSubmit = e => {
    e.preventDefault();
    const forms = e.currentTarget.elements;
    const normalizedFilter = forms.name.value.toLowerCase();

    const checkByName = arrContacts.find(
      contact => contact.name.toLowerCase() === normalizedFilter
    );
    if (checkByName) {
      e.currentTarget.reset();
      alert('this contacts is written in phonebook');
      return;
    }
    dispatch(
      addContacts({
        name: forms.name.value,
        number: forms.number.value,
        id: nanoid(),
      })
    );
    e.currentTarget.reset();
  };

  return (
    <form className={css.form} onSubmit={formSubmit} autoComplete="off">
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </label>

      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button type="submit" className={css.big_button}>
        Add contacts
      </button>
    </form>
  );
}

export default Form;
