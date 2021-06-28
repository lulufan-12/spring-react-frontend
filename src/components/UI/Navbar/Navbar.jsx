import React from 'react';
import styled from 'styled-components';
import NavItem from '../NavItem/NavItem';
import Button from '../Button/Button';

const Nav = styled.nav`
  background-color: #679c76;
  padding: 12px;
  border: 1px solid #333;
`;

const navbar = () => (
  <Nav>
    <NavItem to="/">Projetos</NavItem>
    <NavItem to="/registro-horas">Registrar Horas</NavItem>
    <Button>Encerrar Sessão</Button>
  </Nav>
);
export default navbar;
