import {
  $popularityFilter,
  sortTickets
} from '@app/features/tickets-list/model/popularity-sort';
import {
  $companyFilter,
  filterTicketsByCompany
} from '@app/features/tickets-list/model/companies-filter';
import { $stopsFilter, filterTicketsByStop } from '@app/features/tickets-list/model/stop-filter';
import { createEvent, forward, merge, restore, sample } from 'effector';
import { $tickets } from '@app/modules/Ticket/model';
import type { Ticket } from '@app/modules/Ticket';

const setFilteredTickets = createEvent<Ticket[]>();

export const $filteredTickets = restore(setFilteredTickets, []);

sample({
  source: $tickets,
  target: setFilteredTickets
});

sample({
  clock: $popularityFilter,
  source: $filteredTickets,
  fn: (tickets, type) => sortTickets(type, tickets),
  target: setFilteredTickets
});

sample({
  clock: merge([$stopsFilter, $companyFilter]),
  source: $tickets,
  target: setFilteredTickets
});

sample({
  clock: $companyFilter,
  source: $filteredTickets,
  fn: (tickets, type) => filterTicketsByCompany(type, tickets),
  target: setFilteredTickets
});

sample({
  clock: $stopsFilter,
  source: $filteredTickets,
  fn: (tickets, types) => filterTicketsByStop(types, tickets),
  target: setFilteredTickets
});
