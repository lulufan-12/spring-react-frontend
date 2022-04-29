import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.h1`
  font-size: 2rem;
  color: #3b5743;
  text-align: center;
`;

const H1Title = (props) => <Title>{props.children}</Title>;
H1Title.propTypes = {
  children: PropTypes.any,
};

export default H1Title;
