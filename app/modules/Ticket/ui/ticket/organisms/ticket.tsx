import type { Ticket as ITicket } from '@app/modules/Ticket';
import Image from 'next/image';
import { Price } from '@app/modules/Ticket/ui/ticket';
import { Segment } from '@app/modules/Segment/ui/segment';
import styled from 'styled-components';
import { theme } from '@app/assets';

type Props = {
  ticket: ITicket;
};

export const Ticket = ({ ticket }: Props) => (
  <Container>
    <Header>
      <Price amount={13400} />
      <Image src="/s7.png" width={110} height={36} alt="Company logo" />
    </Header>
    <SegmentsList>
      <Segment segment={ticket.segments[0]} />
    </SegmentsList>
  </Container>
);

// Layout
const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #fff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);

  padding: ${theme.spacePx * 2}px;
  border-radius: 5px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: ${theme.spacePx}px;
`;

const SegmentsList = styled.div`
  display: flex;
  flex-direction: column;

  :not(:last-child) {
    margin-bottom: ${theme.spacePx}px;
  }
`;
