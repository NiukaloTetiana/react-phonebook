import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsLoggedIn, selectIsRefreshing } from '../redux/auth/selectors';

export const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (!isLoggedIn && !isRefreshing) {
    return <Navigate state={{ from: location }} to="/login" />;
  }
  return children;
};
