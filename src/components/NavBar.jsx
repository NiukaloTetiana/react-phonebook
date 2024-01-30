import React from 'react';
import { useSelector } from 'react-redux';

import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import { selectIsLoggedIn } from '../redux/auth/selectors';

const { Link } = require('react-router-dom/dist');

export const Navbar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className="navbar text-yellow-300 font-bold bg-lime-600">
      <div className="flex-1">
        <Link
          to="/"
          className=" text-xl btn btn-ghost font-bold text-violet-700 focus:text-white"
        >
          PHONE|BOOK
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal text-xl px-1">
          {isLoggedIn && (
            <li>
              <Link className="focus:text-white" to="/contacts">
                Contacts
              </Link>
            </li>
          )}
          <li>{isLoggedIn ? <UserMenu /> : <AuthNav />}</li>
        </ul>
      </div>
    </div>
  );
};
