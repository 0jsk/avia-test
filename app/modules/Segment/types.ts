import { array, literal, number, type, union } from 'io-ts';
import type { TypeOf } from 'io-ts';
import { uuid } from '@app/utils/io-ts/extended-types';

export const CityCodes = union([
  literal('MOW'),
  literal('HKT'),
  literal('HKG'),
  literal('JNB'),
  literal('PTB'),
  literal('ARH'),
  literal('TRN'),
  literal('KRS'),
  literal('SRT'),
  literal('LOS'),
  literal('EKV'),
  literal('EKT')
]);
export type CityCodes = TypeOf<typeof CityCodes>;

export const Segment = type({
  id: uuid,
  origin: CityCodes,
  destination: CityCodes,
  dateStart: number,
  dateEnd: number,
  steps: array(CityCodes),
  duration: number
});
export type Segment = TypeOf<typeof Segment>;
