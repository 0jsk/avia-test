import { string, type } from 'io-ts';
import type { TypeOf } from 'io-ts';
import { uuid } from '@app/utils/io-ts';

export const CompanyC = type({
  id: uuid,
  name: string,
  logo: string
});

export type Company = TypeOf<typeof CompanyC>;
