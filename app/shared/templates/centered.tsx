import type { FC } from 'react';
import styled from 'styled-components';

export const CenteredTemplate: FC = ({ children }) => (
  <Container>
    {children}
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
