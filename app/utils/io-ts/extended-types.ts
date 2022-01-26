import { Type, failure, number, string, success } from 'io-ts';
import { chain } from 'fp-ts/lib/Either';
import { pipe } from 'fp-ts/function';

export const uuid = string;

export type DateFromNumberC = Type<Date, number, unknown>;
export const DateFromNumber: DateFromNumberC = new Type<Date, number, unknown>(
  'DateFromNumber',
  (u): u is Date => u instanceof Date,
  (u, c) => pipe(
    number.validate(u, c),
    chain(n => {
      const d = new Date(n);

      return isNaN(d.getTime()) ? failure(u, c) : success(d);
    })
  ),
  a => a.getTime()
);
