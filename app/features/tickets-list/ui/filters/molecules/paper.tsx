import type { FC } from 'react';
import { Text } from '@app/shared/ui';
import styled from 'styled-components';
import { theme } from '@app/assets';

type Props = {
  title: string;
};

export const Paper: FC<Props> = ({ children, title }) => (
  <Container>
    <UppercaseText type="span" bold>{title}</UppercaseText>
    <Content>
      {children}
    </Content>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: ${theme.spacePx * 2}px 0 ${theme.spacePx}px;

  border-radius: 5px;
  background-color: #fff;

  box-shadow: 0 2px 8px rgba(0, 0, 0, .1);
`;

const Content = styled.div`
  margin-top: ${theme.spacePx}px;
`;

const UppercaseText = styled(Text)`
  text-transform: uppercase;

  padding: 0 ${theme.spacePx * 2}px;
`;
