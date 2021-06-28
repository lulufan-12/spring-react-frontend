import React from 'react';
import { connect } from 'react-redux';
import Wrapper from '../UI/Wrapper/Wrapper';
import H1Title from '../UI/H1Title/H1Title';
import LoginPage from '../LoginPage/LoginPage';
import Navbar from '../UI/Navbar/Navbar';
import Label from '../UI/Label/Label';
import InputSubmit from '../UI/InputSubmit/InputSubmit';

const hourRegisterPage = ({ loggedIn, projects }) => {
  const page = !loggedIn ? (
    <LoginPage />
  ) : (
    <Wrapper>
      <Navbar />
      <H1Title>Registrar Horas Trabalhadas</H1Title>
      <form>
        <table>
          <tr>
            <td>
              <Label for="date">Data</Label>
            </td>
            <td>
              <input type="date" name="date" />
            </td>
          </tr>
          <tr>
            <td>
              <Label for="workedHours">Horas Trabalhadas</Label>
            </td>
            <td>
              <input type="number" name="workedHours" />
            </td>
          </tr>
          <tr>
            <td>
              <Label for="workedHours">Projeto</Label>
            </td>
            <td>
              <select value="1">
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
    </Wrapper>
  );
  return page;
};

export default connect((state) => ({
  loggedIn: state.loggedIn,
  projects: state.projects,
}))(hourRegisterPage);
