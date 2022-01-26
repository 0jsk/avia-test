import { array, number, string, type } from 'io-ts';
import type { TypeOf } from 'io-ts';
import { uuid } from '@app/utils/io-ts';

export const Ticket = type({
  id: uuid,
  price: number,
  companyId: string,
  segments: array(string)
});
export type Ticket = TypeOf<typeof Ticket>;
