import React from 'react';
import { Col } from 'react-bootstrap';
import { Title, Subtitle, Paragraph } from '../../styles';

const TitleContainer = () => {
  return (
    <Col
      md={6}
      className="p-3"
      style={{
        textAlign: 'left',
        borderRadius: '100px 0 0 100px',
      }}
    >
      <Title>Time Saver</Title>
      <Subtitle>Rápido, moderno e intuitivo</Subtitle>
      <Paragraph>
        O jeito certo de gerenciar seu dia de trabalho!
        <br />
        Agora disponível para Web!
      </Paragraph>
    </Col>
  );
};

export default TitleContainer;
