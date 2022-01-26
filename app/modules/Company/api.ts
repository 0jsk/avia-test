import type { Company } from '@app/modules/Company';
import { CompanyC } from '@app/modules/Company';
import { array } from 'io-ts';
import { assert } from '@app/shared/lib/io-ts';

export const fetchCompanies = (): Promise<Company[]> => fetch(
  '/api/companies',
  { method: 'GET' }
)
  .then(res => res.json())
  .then(array(CompanyC).decode)
  .then(assert);
