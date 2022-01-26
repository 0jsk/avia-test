import type { Ticket } from '@app/modules/Ticket';
import { TicketC } from '@app/modules/Ticket';
import { array } from 'io-ts';
import { assert } from '@app/utils/io-ts';

interface Interval {
  start: number;
  end: number;
}

export const fetchTickets = (interval?: Interval): Promise<Ticket[]> => {
  const { start = 0, end = 5 } = interval ?? {};

  return fetch(`/api/tickets?start=${start}&end=${end}`, {
    method: 'GET'
  })
    .then(res => res.json())
    .then(array(TicketC).decode)
    .then(assert);
};
