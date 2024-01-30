import { useSelector } from 'react-redux';

import { selectFilteredContacts } from '../redux/contacts/selectors';
import { ContactsListItem } from './ContactListItem';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className="flex flex-col gap-2 p-8">
      {contacts.map(({ name, number, id }) => (
        <ContactsListItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};
