import { useDispatch } from 'react-redux';

import { filterContacts } from '../redux/contacts/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex pl-10">
      <label className="text-lg italic text-violet-700 font-medium ">
        Find contacts by name
        <input
          className="input input-bordered input-success w-full max-w-xs text-lg placeholder:italic placeholder:text-lime-600"
          type="text"
          name="filter"
          placeholder="Enter contact name"
          onChange={event => dispatch(filterContacts(event.target.value))}
        />
      </label>
    </div>
  );
};
