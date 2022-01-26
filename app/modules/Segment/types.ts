import { array, literal, number, type, union } from 'io-ts';
import type { TypeOf } from 'io-ts';
import { uuid } from '@app/shared/lib/io-ts';

export const CityCodesC = union([
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
export type CityCodes = TypeOf<typeof CityCodesC>;

export const SegmentC = type({
  id: uuid,
  origin: CityCodesC,
  destination: CityCodesC,
  dateStart: number,
  dateEnd: number,
  stops: array(CityCodesC),
  duration: number
});
export type Segment = TypeOf<typeof SegmentC>;
