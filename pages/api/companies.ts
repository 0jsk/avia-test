import type { Company } from '@app/modules/Company';
import type { NextApiHandler } from 'next';
import companiesData from '@/data/companies.json';

const companies: Company[] = companiesData;

// eslint-disable-next-line require-await
export default (async (_request, response) => {
  response.json(companies);
}) as NextApiHandler;
