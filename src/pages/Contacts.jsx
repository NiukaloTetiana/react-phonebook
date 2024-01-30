import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectError, selectIsLoading } from '../redux/contacts/selectors';
import { ContactForm } from '../components/ContactForm';
import { ContactList } from '../components/ContactList';
import { Filter } from '../components/Filter';
import { Loader } from '../components/Loader';
import { Error } from '../components/Error';
import { fetchContacts } from '../redux/contacts/operations';

const Contacts = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ContactForm />
      <div className="divider divider-orange-400 text-2xl bg-orange-400 text-lime-600 font-bold ">
        Contacts
      </div>
      <div>
        <Filter />
        {loading && <Loader />}
        {error && <Error />}
        <ContactList />
      </div>
    </div>
  );
};

export default Contacts;
