import React, { useEffect, memo } from 'react'
import { AuthContext } from '../auth';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = memo(({children}) => {
  const {pathname, search} = useLocation();
  const {logged } = useContext(AuthContext);
  const lastPath = pathname + search;
  localStorage.setItem('lastPath', lastPath);
  return (
    logged 
      ? children
      : <Navigate to="/login"/>
  )
})
