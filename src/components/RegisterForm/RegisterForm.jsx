import React from 'react';
import { connect } from 'react-redux';
import Label from '../UI/Label/Label';
import InputSubmit from '../UI/InputSubmit/InputSubmit';
import {
  dateChanged,
  projectChanged,
  submitWorkedHours,
  workedHoursChanged,
} from '../../store/actions';

const registerForm = ({ projects, project, workedHours, date, dispatch }) => {
  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault();
        dispatch(submitWorkedHours());
      }}
    >
      <table>
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
              onChange={(evt) => {
                dispatch(projectChanged(evt.target.value));
              }}
            >
              <option value=""></option>
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
      </table>
    </form>
  );
};

export default connect((state) => ({
  projects: state.projectsReducer.projects,
  date: state.registerReducer.date,
  workedHours: state.registerReducer.workedHours,
  project: state.registerReducer.project,
}))(registerForm);
