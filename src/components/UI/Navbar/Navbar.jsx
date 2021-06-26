import React from 'react';
import styled from 'styled-components';
import NavItem from '../NavItem/NavItem';

const Nav = styled.nav`
  background-color: #679c76;
  padding: 12px;
  box-shadow: 0 0 5px 5px #666;
`;

const navbar = () => (
  <Nav>
    <NavItem to="/">Login</NavItem>
    <NavItem to="/projetos">Projetos</NavItem>
    <NavItem to="/registro-horas">Registrar Horas</NavItem>
    <NavItem to="/">Encerrar Sessão</NavItem>
  </Nav>
);
export default navbar;
