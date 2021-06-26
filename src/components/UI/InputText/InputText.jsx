import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputText = styled.input`
  padding: 4px;
  margin: 0 8px;
  outline: none;
  &:focus {
    border: none;
    border-bottom: 1px solid #000;
  }
`;

const inputText = (props) => (
  <InputText type={props.type} value={props.value}></InputText>
);

inputText.PropTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
export default inputText;
