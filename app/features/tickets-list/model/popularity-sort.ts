import { createEvent, restore } from 'effector';
import type { Segment } from '@app/modules/Segment';
import type { Ticket } from '@app/modules/Ticket';

export enum PopularitySort {
  CHEAPEST = 'CHEAPEST',
  FASTEST = 'FASTEST',
  BALANCED = 'BALANCED'
}

export const setPopularitySortType = createEvent<PopularitySort>();
export const $popularityFilter = restore(setPopularitySortType, null);

export const sortTickets = (type: PopularitySort, tickets: Ticket[]): Ticket[] => {
  switch (type) {
    case (PopularitySort.CHEAPEST):
      return [...tickets].sort((t1, t2) => Math.sign(t1.price - t2.price));
    case (PopularitySort.FASTEST):
      return [...tickets].sort((t1, t2) => {
        const sortSegments = (segments: Segment[]) => segments.sort((a, b) =>
          a.duration.getTime() - b.duration.getTime()
        );

        const t1FastestSegment = sortSegments(t1.segments)?.[0];
        const t2FastestSegment = sortSegments(t2.segments)?.[0];

        return t1FastestSegment.duration.getTime() - t2FastestSegment.duration.getTime();
      });
    case (PopularitySort.BALANCED): {
      const cheapestSortedTickets = sortTickets(PopularitySort.CHEAPEST, [...tickets]);

      return sortTickets(PopularitySort.FASTEST, cheapestSortedTickets);
    }
    default:
      throw new Error(`Unpredictable sort type ${type}`);
  }
};
