import type { Ticket as ITicket } from '@app/modules/Ticket';
import Image from 'next/image';
import { Price } from '@app/features/tickets-list/ui/ticket';
import { Segment } from '@app/features/tickets-list/ui/ticket/organisms/ticket';
import styled from 'styled-components';
import { theme } from '@app/assets';

type Props = {
  ticket: ITicket;
};

export const Ticket = ({ ticket }: Props) => (
  <Container>
    <Header>
      <Price amount={ticket.price} />
      <Image src={`/${ticket.company.logo}`} width={110} height={36} alt="Company logo" />
    </Header>
    <SegmentsList>
      {ticket.segments.map(segment => <Segment key={segment.id} segment={segment} />)}
    </SegmentsList>
  </Container>
);

// Layout
const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .1);

  padding: ${theme.spacePx * 2}px;
  border-radius: 5px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: ${theme.spacePx * 2}px;
`;

const SegmentsList = styled.div`
  display: grid;
  grid-auto-rows: auto;
  row-gap: ${theme.spacePx}px;
`;
