import type { Segment } from '@app/modules/Segment';
import { SegmentC } from '@app/modules/Segment';
import { array } from 'io-ts';
import { assert } from '@app/utils/io-ts';

export const fetchSegments = (): Promise<Segment[]> => fetch(
  '/api/segments',
  { method: 'GET' }
)
  .then(res => res.json())
  .then(array(SegmentC).decode)
  .then(assert);
