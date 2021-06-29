import React from 'react';
import { connect } from 'react-redux';
import H1Title from '../UI/H1Title/H1Title';
import Table from '../UI/Table/Table';
import Th from '../UI/TableTh/TableTh';
import Td from '../UI/TableTd/TableTd';
import Navbar from '../UI/Navbar/Navbar';
import Wrapper from '../UI/Wrapper/Wrapper';
import LoginPage from '../LoginPage/LoginPage';

const ProjectPage = ({
  dispatch,
  projects,
  userName,
  admin,
  loggedIn,
  adminProjects,
}) => {
  const pjts = admin ? (
    <>
      <tr>
        <Th>Nome</Th>
        <Th>Usuário</Th>
        <Th>Horas Trabalhadas</Th>
      </tr>
      {adminProjects.map((pjt) => (
        <tr key={pjt.id}>
          <Td>{pjt.name}</Td>
          <Td>{pjt.user}</Td>
          <Td>{pjt.workedHours}</Td>
        </tr>
      ))}
    </>
  ) : (
    <>
      <tr>
        <Th>Nome</Th>
        <Th>Horas Trabalhadas</Th>
      </tr>
      {projects.map((pjt) => (
        <tr key={pjt.id}>
          <Td>{pjt.name}</Td>
          <Td>{pjt.workedHours}</Td>
        </tr>
      ))}
    </>
  );

  const page = !loggedIn ? (
    <LoginPage />
  ) : (
    <Wrapper>
      <Navbar />
      <H1Title>Usuário {userName}</H1Title>
      <Table>
        <tbody>{pjts}</tbody>
      </Table>
    </Wrapper>
  );
  return page;
};

export default connect((state) => ({
  projects: state.projectsReducer.projects,
  adminProjects: state.projectsReducer.adminProjects,
  userName: state.loginReducer.user.name,
  loggedIn: state.loginReducer.loggedIn,
  admin: state.loginReducer.user.admin,
}))(ProjectPage);
