import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLabel = styled.label`
  font-size: 1.2rem;
`;

const Label = (props) => (
  <StyledLabel htmlFor={props.for}>{props.children}</StyledLabel>
);

Label.propTypes = {
  for: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Label;
