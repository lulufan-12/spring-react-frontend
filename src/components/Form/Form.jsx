import React from 'react';
import styled from 'styled-components';
import H1Title from '../UI/H1Title/H1Title';
import InputSubmit from '../UI/InputSubmit/InputSubmit';
import InputText from '../UI/InputText/InputText';
import Label from '../UI/Label/Label';

const Form = styled.form`
  color: #000;
  padding: 10px 60px;
  box-sizing: border-box;
`;

const form = () => (
  <Form>
    <H1Title>Meus Projetos</H1Title>
    <table style={{ textAlign: 'center' }}>
      <tr>
        <td>
          <Label for="username">E-mail</Label>
        </td>
        <td>
          <InputText type="email" name="username" />
        </td>
      </tr>
      <tr>
        <td>
          <Label for="password">Senha</Label>
        </td>
        <td>
          <InputText type="password" name="password" />
        </td>
      </tr>
      <tr>
        <td colSpan="2">
          <InputSubmit value="Entrar" />
        </td>
      </tr>
    </table>
  </Form>
);

export default form;
