import type { NextApiHandler } from 'next';
import type { Ticket } from '@app/modules/Ticket';
import ticketsData from '@/data/tickets.json';

const tickets: Ticket[] = ticketsData;

// eslint-disable-next-line require-await
export default (async (_request, response) => {
  response.json(tickets);
}) as NextApiHandler;
