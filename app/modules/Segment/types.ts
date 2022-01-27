import { DateFromNumber, uuid } from '@app/shared/lib/io-ts';
import { array, literal, type, union } from 'io-ts';
import type { TypeOf } from 'io-ts';

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
  dateStart: DateFromNumber,
  dateEnd: DateFromNumber,
  stops: array(CityCodesC),
  duration: DateFromNumber
});
export type Segment = TypeOf<typeof SegmentC>;
