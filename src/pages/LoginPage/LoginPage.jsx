import React from 'react';
import { Container } from 'react-bootstrap';
import PublicLayout from '../../common/layout/PublicLayout';
import { StyledRow } from './styles';
import TitleContainer from './components/TitleContainer';
import LoginContainer from './components/LoginContainer';

const LoginPage = () => {
  return (
    <PublicLayout>
      <Container>
        <StyledRow className="g-5 align-items-center">
          <TitleContainer />
          <LoginContainer />
        </StyledRow>
      </Container>
    </PublicLayout>
  );
};

export default LoginPage;
