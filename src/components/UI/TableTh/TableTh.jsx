import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TableTh = styled.th`
  padding: 8px 24px;
  border-top: 1px solid #394539;
  border-bottom: 1px solid #394539;
  background-color: #fff;
  font-size: 1.4rem;
`;

const tableTh = (props) => <TableTh>{props.children}</TableTh>;

tableTh.PropTypes = {
  children: PropTypes.string.isRequired,
};

export default tableTh;
