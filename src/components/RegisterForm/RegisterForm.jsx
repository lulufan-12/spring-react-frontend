import React from 'react';
import { connect } from 'react-redux';
import Label from '../UI/Label/Label';
import InputSubmit from '../UI/InputSubmit/InputSubmit';
import { useEffect } from 'react';
import { loadProjects } from '../../store/actions';
import PropTypes from 'prop-types';
import {
  dateChanged,
  projectChanged,
  submitWorkedHours,
  workedHoursChanged,
} from '../../store/actions';

const RegisterForm = ({
  projects,
  project,
  workedHours,
  date,
  dispatch,
  admin,
}) => {
  useEffect(() => {
    dispatch(loadProjects());
  }, []);
  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault();
        dispatch(submitWorkedHours());
      }}
    >
      <table>
        <tbody>
          <tr>
            <td>
              <Label for="date">Data</Label>
            </td>
            <td>
              <input
                value={date}
                onChange={(evt) => {
                  dispatch(dateChanged(evt.target.value));
                }}
                type="date"
                name="date"
              />
            </td>
          </tr>
          <tr>
            <td>
              <Label for="workedHours">Horas Trabalhadas</Label>
            </td>
            <td>
              <input
                value={workedHours}
                onChange={(evt) => {
                  dispatch(workedHoursChanged(evt.target.value));
                }}
                type="number"
                name="workedHours"
              />
            </td>
          </tr>
          <tr>
            <td>
              <Label for="project">Projeto</Label>
            </td>
            <td>
              <select
                value={project}
                onChange={(evt) => {
                  dispatch(projectChanged(evt.target.value));
                }}
              >
                <option value="Nenhum"></option>
                {projects.map((pjt) => (
                  <option value={pjt.id} key={pjt.id}>
                    {pjt.name}
                  </option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <InputSubmit value="Registrar" />
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

RegisterForm.propTypes = {
  projects: PropTypes.array,
  project: PropTypes.string,
  workedHours: PropTypes.number,
  date: PropTypes.any,
  dispatch: PropTypes.func,
  admin: PropTypes.bool,
};

export default connect((state) => ({
  projects: state.registerReducer.projects,
  date: state.registerReducer.date,
  workedHours: state.registerReducer.workedHours,
  project: state.registerReducer.project,
  admin: state.loginReducer.user.admin,
}))(RegisterForm);
