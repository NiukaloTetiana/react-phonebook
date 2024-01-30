import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoExitOutline } from 'react-icons/io5';

import { selectUser } from '../redux/auth/selectors';
import { userLogout } from '../redux/auth/operations';

const UserMenu = () => {
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <details className="px-4">
      <summary>Welcome, {name}!</summary>
      <ul className=" bg-lime-600 rounded-t-none">
        <li className="py-1">
          <button
            onClick={() => dispatch(userLogout())}
            type="button"
            className=" hover:text-white hover:bg-orange-400 text-violet-700 bg-yellow-300 font-bold"
          >
            Go aut <IoExitOutline />
          </button>
        </li>
      </ul>
    </details>
  );
};

export default UserMenu;
