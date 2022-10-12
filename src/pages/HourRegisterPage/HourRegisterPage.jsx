import React from 'react';
import { connect } from 'react-redux';
import H1Title from '../../common/components/H1Title/H1Title';
import LoginPage from '../LoginPage/LoginPage';
import Navbar from '../../common/components/Navbar/Navbar';
import RegisterForm from './components/RegisterForm/RegisterForm';

const HourRegisterPage = ({ loggedIn }) => {
  const page = !loggedIn ? (
    <LoginPage />
  ) : (
    <div>
      <Navbar />
      <H1Title>Registrar Horas Trabalhadas</H1Title>
      <RegisterForm />
    </div>
  );
  return page;
};

export default connect((state) => ({
  loggedIn: state.loginReducer.loggedIn,
}))(HourRegisterPage);
