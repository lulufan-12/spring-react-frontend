import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Label = styled.label`
  font-size: 1.2rem;
`;

const label = (props) => <Label htmlFor={props.for}>{props.children}</Label>;
label.propTypes = {
  for: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default label;
