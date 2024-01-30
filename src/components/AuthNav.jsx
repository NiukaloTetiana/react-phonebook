import React from 'react';
import { Link } from 'react-router-dom';

const AuthNav = () => {
  return (
    <details className="px-4">
      <summary>Auth</summary>
      <ul className="p-2 bg-lime-600 rounded-t-none">
        <li className="py-1">
          <Link
            to="/login"
            className=" hover:text-white hover:bg-orange-400 text-violet-700 bg-yellow-300 font-bold "
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            to="/register"
            className="  hover:text-white hover:bg-orange-400 text-violet-700 bg-yellow-300 font-bold"
          >
            Register
          </Link>
        </li>
      </ul>
    </details>
  );
};

export default AuthNav;
