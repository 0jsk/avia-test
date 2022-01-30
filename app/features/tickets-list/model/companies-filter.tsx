import { createEvent, restore } from 'effector';
import type { Ticket } from '@app/modules/Ticket';

export enum CompanyFilter {
  ALL = 'ALL',
  S7 = 'S7 Airlines',
  Xiamen = 'XiamenAir'
}

export const mapCompanyFilterToString: Record<CompanyFilter, string> = {
  [CompanyFilter.ALL]: 'Все',
  [CompanyFilter.S7]: 'S7',
  [CompanyFilter.Xiamen]: 'XiamenAir'
};

export const setCompanyFilter = createEvent<CompanyFilter>();

export const $companyFilter = restore(setCompanyFilter, CompanyFilter.ALL);

export const filterTicketsByCompany = (type: CompanyFilter, tickets: Ticket[]) => {
  if (type === CompanyFilter.ALL) {
    return tickets;
  }

  return tickets.filter(ticket => ticket.company.name === type);
};
