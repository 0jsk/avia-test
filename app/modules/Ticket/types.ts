import { array, number, string, type } from 'io-ts';
import type { TypeOf } from 'io-ts';
import { uuid } from '@app/shared/lib/io-ts';

export const TicketC = type({
  id: uuid,
  price: number,
  companyId: string,
  segments: array(string)
});
export type Ticket = TypeOf<typeof TicketC>;
