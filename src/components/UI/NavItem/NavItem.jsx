import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Anchor = styled.a`
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

const linkStyle = {
  textDecoration: 'none',
};

const navitem = (props) => (
  <Link to={props.to} style={linkStyle}>
    <Anchor>{props.children}</Anchor>
  </Link>
);
navitem.PropTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
export default navitem;
