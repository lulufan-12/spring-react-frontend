import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.section`
  background-color: #fff;
  padding: 30px;
  box-shadow: 0 0 8px 4px #444;
`;

const wrapper = (props) => <Wrapper>{props.children}</Wrapper>;

wrapper.PropTypes = {
  children: PropTypes.string.isRequired,
};

export default wrapper;
