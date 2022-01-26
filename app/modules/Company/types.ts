import { string, type } from 'io-ts';
import type { TypeOf } from 'io-ts';
import { uuid } from '@app/shared/lib/io-ts';

export const CompanyC = type({
  id: uuid,
  name: string,
  logo: string
});

export type Company = TypeOf<typeof CompanyC>;
