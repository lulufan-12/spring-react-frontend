import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledText = styled.input`
  padding: 4px;
  margin: 0 8px;
  outline: none;
  &:focus {
    border: none;
    border-bottom: 1px solid #000;
  }
`;

const InputText = (props) => (
  <StyledText
    type={props.type}
    onChange={props.changed}
    value={props.value}
    name={props.name}
  ></StyledText>
);

InputText.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  changed: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
export default InputText;
