import type { NextApiHandler } from 'next';
import type { Ticket } from '@app/modules/Ticket';
import ticketsData from '@/data/tickets.json';

const tickets: Ticket[] = ticketsData;

// eslint-disable-next-line require-await
export default (async (request, response) => {
  const { start = 0, end = 5 } = request.query;

  response.json(tickets.slice(+start, +end));
}) as NextApiHandler;
