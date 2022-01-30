import { createEvent, restore } from 'effector';
import type { Ticket } from '@app/modules/Ticket';

export enum StopFilter {
  ALL = 'ALL',
  EMPTY = 'EMPTY',
  SINGLE_STOP = 'SINGLE_STOP',
  TWO_STOPS = 'TWO_STOPS',
  THREE_STOPS = 'THREE_STOPS'
}

export const mapStopFilterToString: Record<StopFilter, string> = {
  [StopFilter.ALL]: 'Все',
  [StopFilter.EMPTY]: 'Без пересадок',
  [StopFilter.SINGLE_STOP]: '1 Пересадка',
  [StopFilter.TWO_STOPS]: '2 Пересадки',
  [StopFilter.THREE_STOPS]: '3 Пересадки'
};

const mapFilterToStopsCount: Record<Exclude<StopFilter, StopFilter.ALL>, number> = {
  [StopFilter.EMPTY]: 0,
  [StopFilter.SINGLE_STOP]: 1,
  [StopFilter.TWO_STOPS]: 2,
  [StopFilter.THREE_STOPS]: 3
};

const setStopsFilters = createEvent<StopFilter[]>();

export const selectFilter = createEvent<StopFilter>();

export const $stopsFilter = restore(setStopsFilters, [])
  .on(selectFilter, (selectedFilters, payload) => {
    if (payload === StopFilter.ALL) {
      return Object.values(StopFilter);
    }

    const selectedFiltersWithoutAll = selectedFilters.filter(f => f !== StopFilter.ALL);

    return selectedFiltersWithoutAll.includes(payload) ? selectedFiltersWithoutAll.filter(f => f !== payload) : [...selectedFiltersWithoutAll, payload];
  });

export const filterTicketsByStop = (types: StopFilter[], tickets: Ticket[]) => {
  if (types.includes(StopFilter.ALL) || types.length === 0) {
    return tickets;
  }

  const isTicketHasRequiredQuantityByType = (szTypes: StopFilter[], ticket: Ticket) =>
    !!ticket.segments.find(segment =>
      szTypes.some(type => mapFilterToStopsCount[type] === segment.stops.length)
    );

  return tickets.filter(ticket => isTicketHasRequiredQuantityByType(types, ticket));
};
