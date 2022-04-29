import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const linkStyle = {
  textDecoration: 'none',
};

const StyledLink = styled(Link)`
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 8px;
  text-shadow: 2px 2px 2px #666;
  transition: all linear 0.3s;
  &:hover {
    color: #025211;
    text-shadow: none;
  }
`;

const NavItem = (props) => (
  <StyledLink to={props.to} style={linkStyle}>
    {props.children}
  </StyledLink>
);

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default NavItem;
