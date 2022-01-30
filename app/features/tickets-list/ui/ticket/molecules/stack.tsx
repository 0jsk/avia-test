import type { FC } from 'react';
import styled from 'styled-components';

export const Stack: FC = ({ children }) => (
  <Container>
    {children}
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
