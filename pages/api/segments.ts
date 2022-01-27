import type { NextApiHandler } from 'next';
import segmentsData from '@/data/segments.json';

// eslint-disable-next-line require-await
export default (async (_request, response) => {
  response.json(segmentsData);
}) as NextApiHandler;
