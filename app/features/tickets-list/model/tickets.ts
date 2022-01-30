import {
  $popularitySort,
  sortTickets
} from '@app/features/tickets-list/model/popularity-sort';
import type { CompanyFilter } from '@app/features/tickets-list/model/companies-filter';
import {
  $companyFilter,
  filterTicketsByCompany
} from '@app/features/tickets-list/model/companies-filter';
import type { StopFilter } from '@app/features/tickets-list/model/stop-filter';
import { $stopsFilter, filterTicketsByStop } from '@app/features/tickets-list/model/stop-filter';
import { combine, createEvent, merge, restore, sample } from 'effector';
import { $tickets } from '@app/modules/Ticket/model';
import type { Ticket } from '@app/modules/Ticket';

const setFilteredTickets = createEvent<Ticket[]>();

export const $filteredTickets = restore(setFilteredTickets, []);

const filterTickets = (stops: StopFilter[], company: CompanyFilter, tickets: Ticket[]) =>
  filterTicketsByCompany(company, filterTicketsByStop(stops, tickets));

sample({
  clock: $tickets,
  source: combine({ stops: $stopsFilter, company: $companyFilter }),
  fn: ({ stops, company }, tickets) => filterTickets(stops, company, tickets),
  target: setFilteredTickets
});

sample({
  clock: $popularitySort,
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
  clock: combine({ stops: $stopsFilter, company: $companyFilter }),
  source: $filteredTickets,
  fn: (tickets, { stops, company }) => filterTickets(stops, company, tickets),
  target: setFilteredTickets
});
