import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  loadUserWorkedHours,
  loadAdminWorkedHours,
} from '../../../store/actions';
import { useEffect } from 'react';
import { connect } from 'react-redux';

const ProjectsTable = styled.table`
  width: 100%;
  border-spacing: 0;
  text-align: center;
  border-bottom: 1px solid #394539;
  background-color: #deffde;
`;

const Table = ({ dispatch, admin, children }) => {
  useEffect(() => {
    dispatch(loadUserWorkedHours());
    if (admin) {
      dispatch(loadAdminWorkedHours());
    }
  }, []);

  return <ProjectsTable>{children}</ProjectsTable>;
};

Table.propTypes = {
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func,
  admin: PropTypes.bool,
};

export default connect((state) => ({
  admin: state.loginReducer.user.admin,
}))(Table);
