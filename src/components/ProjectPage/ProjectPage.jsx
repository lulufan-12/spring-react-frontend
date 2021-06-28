import React from 'react';
import { connect } from 'react-redux';
import H1Title from '../UI/H1Title/H1Title';
import Table from '../UI/Table/Table';
import Th from '../UI/TableTh/TableTh';
import Td from '../UI/TableTd/TableTd';
import Navbar from '../UI/Navbar/Navbar';
import Wrapper from '../UI/Wrapper/Wrapper';
import LoginPage from '../LoginPage/LoginPage';

const projectPage = ({ projects, userName, loggedIn }) => {
  const page = !loggedIn ? (
    <LoginPage />
  ) : (
    <Wrapper>
      <Navbar />
      <H1Title>Projetos - {userName}</H1Title>
      <Table>
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
      </Table>
    </Wrapper>
  );

  return page;
};

export default connect((state) => ({
  projects: state.projects,
  userName: state.user.name,
  loggedIn: state.loggedIn,
}))(projectPage);
