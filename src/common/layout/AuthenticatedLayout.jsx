import React from 'react';
import propsTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const AuthenticatedLayout = ({ children }) => {
  const loggedIn = useSelector((state) => state.loginReducer.loggedIn);

  if (!loggedIn) {
    return <Redirect to="/?error=401" />;
  }

  return <>{children}</>;
};

AuthenticatedLayout.propsTypes = {
  children: propsTypes.any,
};

export default AuthenticatedLayout;
