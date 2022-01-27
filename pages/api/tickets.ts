import type { NextApiHandler } from 'next';
import companiesData from '@/data/companies.json';
import segmentsData from '@/data/segments.json';
import ticketsData from '@/data/tickets.json';

export default ((request, response) => {
  const { start = 0, end = 5 } = request.query;

  const tickets = ticketsData
    .map(({ companyId, ...ticket }) => ({
      ...ticket,
      segments: ticket.segments.map(segmentId => segmentsData.find(({ id }) => segmentId === id)),
      company: companiesData.find(({ id }) => companyId === id)
    }));

  response.json(tickets.slice(+start, +end));
}) as NextApiHandler;
