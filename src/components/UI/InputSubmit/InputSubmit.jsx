import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputSubmit = styled.input`
  padding: 4px 8px;
  margin: 8px 0;
  background-color: #679c76;
  color: #fff;
  font-size: 1.1rem;
  border: none;
  border-radius: 4px;
  transition: all linear 0.3s;
  box-shadow: 0 0 2px 1px #666;
  border: solid 1px #3b5743;
  &:hover {
    box-shadow: none;
  }
`;

const inputSubmit = (props) => (
  <InputSubmit type="submit" value={props.value}></InputSubmit>
);

inputSubmit.PropTypes = {
  value: PropTypes.string.isRequired,
};
export default inputSubmit;
