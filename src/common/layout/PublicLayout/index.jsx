import React from 'react';
import PropsTypes from 'prop-types';

const PublicLayout = ({ children }) => {
  return <>{children}</>;
};

PublicLayout.propsTypes = {
  children: PropsTypes.node.isRequired,
};

export default PublicLayout;
