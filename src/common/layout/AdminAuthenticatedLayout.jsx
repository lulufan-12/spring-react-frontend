import React from 'react';
import propsTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const AdminAuthenticatedLayout = ({ children }) => {
  const { loggedIn, user } = useSelector((state) => state.loginReducer);

  if (!loggedIn) {
    return <Redirect to="/?error=401" />;
  }

  if (!user.admin) {
    return <Redirect to="/?error=403" />;
  }

  return <>{children}</>;
};

AdminAuthenticatedLayout.propsTypes = {
  children: propsTypes.any,
};

export default AdminAuthenticatedLayout;
