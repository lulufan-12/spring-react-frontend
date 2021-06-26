import React from 'react';
import styled from 'styled-components';
import Form from '../Form/Form';

const Wrapper = styled.section`
  display: flex;
  height: 100%;
  padding: 30px;
  align-items: center;
  justify-content: center;
`;

const loginPage = () => {
  return (
    <Wrapper>
      <Form />
    </Wrapper>
  );
};

export default loginPage;
