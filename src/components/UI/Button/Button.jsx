import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  color: #f33;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  text-shadow: 2px 2px 2px #333;
  transition: all linear 0.3s;
  &:hover {
    color: #a00;
    text-shadow: none;
  }
`;

const button = (props) => <Button>{props.children}</Button>;

button.PropTypes = {
  children: PropTypes.string.isRequired,
};

export default button;