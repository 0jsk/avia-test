import { $filteredTickets } from '@app/features/tickets-list/model/tickets';
import { Ticket } from '@app/features/tickets-list/ui';
import styled from 'styled-components';
import { theme } from '@app/assets';
import { useList } from 'effector-react';

export const TicketsList = () => {
  const listItems = useList($filteredTickets, ticket => (
    <StyledListItem>
      <Ticket ticket={ticket} />
    </StyledListItem>
  ));

  return (
    <List>
      {listItems}
    </List>
  );
};

// Layout
const List = styled.ul`
  display: flex;
  flex-direction: column;

  margin-top: ${theme.spacePx * 2}px;
`;

const StyledListItem = styled.li`
  :not(:last-child) {
    margin-bottom: ${theme.spacePx * 2}px;
  }
`;
