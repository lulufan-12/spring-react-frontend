import React from 'react';
import styled from 'styled-components';
import NavItem from '../NavItem/NavItem';
import Button from '../Button/Button';
import { connect } from 'react-redux';
import { signOut, clearProjects } from '../../store/actions';

const Nav = styled.nav`
  background-color: #679c76;
  padding: 12px;
  border: 1px solid #333;
`;

const Navbar = ({ dispatch }) => (
  <Nav>
    <NavItem to="/">Projetos</NavItem>
    <NavItem to="/registro-horas">Registrar Horas</NavItem>
    <Button
      clicked={() => {
        dispatch(signOut());
        dispatch(clearProjects());
      }}
    >
      Encerrar Sessão
    </Button>
  </Nav>
);

export default connect()(Navbar);
