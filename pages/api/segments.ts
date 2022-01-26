import type { NextApiHandler } from 'next';
import type { Segment } from '@app/modules/Segment';
import segmentsData from '@/data/segments.json';

const segments: Segment[] = segmentsData as Segment[];

// eslint-disable-next-line require-await
export default (async (_request, response) => {
  response.json(segments);
}) as NextApiHandler;
