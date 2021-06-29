import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import H1Title from '../UI/H1Title/H1Title';
import InputSubmit from '../UI/InputSubmit/InputSubmit';
import InputText from '../UI/InputText/InputText';
import Label from '../UI/Label/Label';
import {
  loadSession,
  passwordChanged,
  signIn,
  usernameChanged,
} from '../../store/actions';
import { useEffect } from 'react';

const StyledForm = styled.form`
  color: #000;
  padding: 10px 60px;
  box-sizing: border-box;
`;

const ErrorMessage = styled.p`
  color: #f00;
  font-weight: bold;
`;

const Form = ({ dispatch, username, password, loginError }) => {
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      dispatch(loadSession());
    }
  }, []);

  return (
    <StyledForm
      onSubmit={(evt) => {
        evt.preventDefault();
        dispatch(signIn());
      }}
    >
      <H1Title>Autenticação</H1Title>
      <table style={{ textAlign: 'center' }}>
        <tbody>
          <tr>
            <td>
              <Label for="username">E-mail</Label>
            </td>
            <td>
              <InputText
                value={username}
                changed={(evt) => {
                  dispatch(usernameChanged(evt.target.value));
                }}
                type="email"
                name="username"
              />
            </td>
          </tr>
          <tr>
            <td>
              <Label for="password">Senha</Label>
            </td>
            <td>
              <InputText
                value={password}
                changed={(evt) => {
                  dispatch(passwordChanged(evt.target.value));
                }}
                type="password"
                name="password"
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <InputSubmit value="Entrar" />
            </td>
          </tr>
        </tbody>
      </table>
      <ErrorMessage>{loginError}</ErrorMessage>
    </StyledForm>
  );
};

export default connect((state) => {
  return {
    username: state.loginReducer.loginForm.username,
    password: state.loginReducer.loginForm.password,
    loginError: state.loginReducer.loginForm.errorMessage,
  };
})(Form);
