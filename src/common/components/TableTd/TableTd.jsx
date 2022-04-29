import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Td = styled.td`
  background-color: #f0f0f0;
  padding: 4px 16px;
  color: #808080;
  font-size: 1.3rem;
`;

const TableTd = (props) => <Td>{props.children}</Td>;

TableTd.propTypes = {
  children: PropTypes.any,
};

export default TableTd;
