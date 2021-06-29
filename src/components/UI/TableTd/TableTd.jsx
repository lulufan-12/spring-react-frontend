import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TableTd = styled.td`
  background-color: #f0f0f0;
  padding: 4px 16px;
  color: #808080;
  font-size: 1.3rem;
`;

const tableTd = (props) => <TableTd>{props.children}</TableTd>;

tableTd.propTypes = {
  children: PropTypes.any,
};

export default tableTd;
