import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledWrapper = styled.section`
  background-color: #fff;
  padding: 30px;
  box-shadow: 0 0 8px 4px #444;
`;

const Wrapper = (props) => <StyledWrapper>{props.children}</StyledWrapper>;

Wrapper.propTypes = {
  children: PropTypes.any,
};

export default Wrapper;
