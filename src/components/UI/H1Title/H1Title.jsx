import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const H1Title = styled.h1`
  font-size: 2rem;
  color: #3b5743;
`;

const h1Title = (props) => <H1Title>{props.children}</H1Title>;
h1Title.PropTypes = {
  children: PropTypes.string.isRequired,
};
export default h1Title;
