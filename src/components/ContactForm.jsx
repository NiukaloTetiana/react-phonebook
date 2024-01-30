import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { selectContacts } from '../redux/contacts/selectors';
import { addContact } from '../redux/contacts/operations';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const findContactByName = contacts.find(
    contact => contact.name.toLowerCase() === name.toLowerCase()
  );

  const findContactNumder = contacts.find(
    contact => contact.number.toLowerCase() === number.toLowerCase()
  );

  const handleSubmit = event => {
    event.preventDefault();

    if (findContactByName) {
      Notify.info(`${name} is already in contacts.`);
      return;
    }

    if (findContactNumder) {
      Notify.info(`${number} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, number }));

    setName('');
    setNumber('');
  };

  const handleChange = ({ target }) => {
    const { value, name } = target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  return (
    <form
      className=" flex flex-col items-center gap-4 mt-10"
      onSubmit={handleSubmit}
    >
      <label className="flex flex-col text-lg italic text-violet-700 font-medium">
        Name
        <input
          className="input input-bordered w-80"
          type="text"
          name="name"
          pattern="^[A-Z][a-z]+ [A-Z][a-z]+$"
          title="Rosie Mango"
          id={nanoid()}
          value={name}
          onChange={handleChange}
          required
        />
      </label>
      <label className=" flex flex-col text-lg italic text-violet-700 font-medium">
        Number
        <input
          className="input input-bordered w-80"
          type="tel"
          name="number"
          pattern="\+?[0-9\s\-\(\)]+"
          title="456-78-90"
          id={nanoid()}
          value={number}
          onChange={handleChange}
          required
        />
      </label>
      <button
        className="flex justify-center mb-8 items-center font-bold hover:text-white hover:bg-orange-400 hover:border-none btn btn-outline text-xl bg-yellow-300 text-lime-600"
        type="submit"
      >
        Add contact
      </button>
    </form>
  );
};
