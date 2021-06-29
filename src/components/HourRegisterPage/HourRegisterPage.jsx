import React from 'react';
import { connect } from 'react-redux';
import Wrapper from '../UI/Wrapper/Wrapper';
import H1Title from '../UI/H1Title/H1Title';
import LoginPage from '../LoginPage/LoginPage';
import Navbar from '../UI/Navbar/Navbar';
import RegisterForm from '../RegisterForm/RegisterForm';

const hourRegisterPage = ({ loggedIn }) => {
  const page = !loggedIn ? (
    <LoginPage />
  ) : (
    <Wrapper>
      <Navbar />
      <H1Title>Registrar Horas Trabalhadas</H1Title>
      <RegisterForm />
    </Wrapper>
  );
  return page;
};

export default connect((state) => ({
  loggedIn: state.loginReducer.loggedIn,
}))(hourRegisterPage);
