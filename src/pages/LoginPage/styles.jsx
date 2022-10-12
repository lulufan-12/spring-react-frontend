import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import { MEDIA_QUERIES } from '../../common/constants/MediaQuery';

export const Title = styled.h1`
  font-size: 3rem;
  color: #ffffff;
`;

export const Subtitle = styled.p`
  font-size: 1.8rem;
  color: #a3a3a3;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  color: #ececec;
  margin: 0;
`;

export const StyledRow = styled(Row)`
  height: 100vh;
  max-height: 100vh;

  ${MEDIA_QUERIES.mdUp} {
    height: auto;
  }
`;

export const ErrorMessage = styled.p`
  color: #e3242b;
  font-weight: 500;
`;
