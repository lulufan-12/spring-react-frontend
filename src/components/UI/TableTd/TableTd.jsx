import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TableTd = styled.td`
  background-color: #f0f0f0;
  color: #808080;
  font-size: 1.3rem;
`;

const tableTd = (props) => <TableTd>{props.children}</TableTd>;

tableTd.PropTypes = {
  children: PropTypes.string.isRequired,
};

export default tableTd;
