import { $filteredTickets } from '@app/features/tickets-list/model/tickets';
import { Ticket } from '@app/features/tickets-list/ui';
import styled from 'styled-components';
import { theme } from '@app/assets';
import { useList } from 'effector-react';
import { Button } from '@app/shared/ui';
import { fetchTicketsFx } from '@app/modules/Ticket/model';
import { useEvent } from 'effector-react/ssr';
import { useStore } from 'effector-react/scope';

export const TicketsList = () => {
  const listItems = useList($filteredTickets, ticket => (
    <StyledListItem>
      <Ticket ticket={ticket} />
    </StyledListItem>
  ));

  const { length } = useStore($filteredTickets);
  const loadMoreTickets = useEvent(fetchTicketsFx);

  return (
    <>
      <List>
        {listItems}
      </List>
      {length > 0 && (
        <Button
          theme="primary"
          onClick={() => loadMoreTickets({ start: 0, end: length + 5 })}
        >
          Показать еще 5 билетов!
        </Button>
      )}
    </>
  );
};

// Layout
const List = styled.ul`
  display: flex;
  flex-direction: column;
`;

const StyledListItem = styled.li`
  :not(:last-child) {
    margin-bottom: ${theme.spacePx * 2}px;
  }
`;
