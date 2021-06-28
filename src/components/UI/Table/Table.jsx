import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ProjectsTable = styled.table`
  width: 100%;
  border-spacing: 0;
  text-align: center;
  border-bottom: 1px solid #394539;
  background-color: #deffde;
`;

const table = (props) => <ProjectsTable>{props.children}</ProjectsTable>;

table.PropTypes = {
  children: PropTypes.string.isRequired,
};

export default table;
