import React from 'react';
import { connect } from 'react-redux';
import H1Title from '../../common/components/H1Title/H1Title';
import Table from '../../common/components/Table/Table';
import Th from '../../common/components/TableTh/TableTh';
import Td from '../../common/components/TableTd/TableTd';
import Navbar from '../../common/components/Navbar/Navbar';
import Wrapper from '../../common/components/Wrapper/Wrapper';
import LoginPage from '../LoginPage/LoginPage';

const ProjectPage = ({
  dispatch,
  workedHours,
  userName,
  admin,
  loggedIn,
  adminWorkedHours,
}) => {
  const pjts = admin ? (
    <>
      <tr>
        <Th>Nome</Th>
        <Th>Usuário</Th>
        <Th>Horas Trabalhadas</Th>
      </tr>
      {adminWorkedHours.map((pjt) => (
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
      {workedHours.map((pjt) => (
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
  workedHours: state.projectsReducer.workedHours,
  adminWorkedHours: state.projectsReducer.adminWorkedHours,
  userName: state.loginReducer.user.name,
  loggedIn: state.loginReducer.loggedIn,
  admin: state.loginReducer.user.admin,
}))(ProjectPage);
