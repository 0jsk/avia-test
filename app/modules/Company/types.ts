import { string, type } from 'io-ts';
import type { TypeOf } from 'io-ts';
import { uuid } from '@app/utils/io-ts/extended-types';

export const Company = type({
  id: uuid,
  name: string,
  logo: string
});

export type Company = TypeOf<typeof Company>;
