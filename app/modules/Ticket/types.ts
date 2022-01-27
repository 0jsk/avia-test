import { array, number, type } from 'io-ts';
import { CompanyC } from '@app/modules/Company';
import { SegmentC } from '@app/modules/Segment';
import type { TypeOf } from 'io-ts';
import { uuid } from '@app/shared/lib/io-ts';

export const TicketC = type({
  id: uuid,
  price: number,
  company: CompanyC,
  segments: array(SegmentC)
});
export type Ticket = TypeOf<typeof TicketC>;
