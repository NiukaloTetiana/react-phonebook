import { useDispatch } from 'react-redux';

import { deleteContact } from '../redux/contacts/operations';

export const ContactsListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = userId => {
    dispatch(deleteContact(userId));
  };

  return (
    <div className="flex flex-col-reverse">
      <li
        key={id}
        className=" text-xl font-semibold text-white bg-lime-600 border-spacing-1 rounded-lg p-3 flex justify-between"
      >
        <p className="flex items-center pl-2">
          {name}:<span className="pl-5">{number}</span>
        </p>
        <button
          className="mr-2 font-bold hover:text-white hover:bg-orange-400 hover:border-none btn btn-outline text-xl bg-yellow-300 text-lime-600"
          type="button"
          onClick={() => handleDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    </div>
  );
};
