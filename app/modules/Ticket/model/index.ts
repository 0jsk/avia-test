import { createEffect, createEvent, restore, sample } from 'effector';
import type { Ticket } from '@app/modules/Ticket';
import { createGate } from 'effector-react';
import { fetchTickets } from '@app/modules/Ticket/api';

interface Interval {
  start: number;
  end: number;
}

export const fetchTicketsFx = createEffect<(interval?: Interval) => Promise<Ticket[]>>(
  interval => fetchTickets(interval));

export const setTickets = createEvent<Ticket[]>();

export const $tickets = restore(setTickets, []);

sample({
  source: fetchTicketsFx.doneData,
  target: setTickets
});

export const TicketsGate = createGate();

TicketsGate.open.watch(() => fetchTicketsFx({ start: 0, end: 5 }));
