import React from 'react';
import { Text } from '@app/shared/ui';
import styled from 'styled-components';

type Point = {
  stop: string;
  time: Date;
};

type Props = {
  stops: [Point, Point];
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Stop = ({ stops }: Props) => (
  <Container>
    <div>
      <Text color="secondary" type="span">{stops[0].stop}</Text>
      -
      <Text color="secondary" type="span">{stops[1].stop}</Text>
    </div>
    <div>
      <Text type="p">{stops[0].time}</Text>
      -
      <Text type="p">{stops[1].time}</Text>
    </div>
  </Container>
);
