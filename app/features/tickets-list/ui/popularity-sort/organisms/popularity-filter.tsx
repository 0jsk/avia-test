import {
  $popularitySort,
  PopularitySort as PopularityFilterEnum,
  setPopularitySortType
} from '@app/features/tickets-list/model';
import { Button, ButtonGroup } from '@app/shared/ui';
import { useEvent, useStore } from 'effector-react/scope';
import styled from 'styled-components';

export const PopularityFilter = () => {
  const selectedFilter = useStore($popularitySort);
  const changeFilter = useEvent(setPopularitySortType);

  return (
    <StyledButtonGroup>
      <Button
        theme="secondary"
        onClick={() => changeFilter(PopularityFilterEnum.CHEAPEST)}
        accented={selectedFilter === PopularityFilterEnum.CHEAPEST}
      >
        Самый дешевый
      </Button>
      <Button
        theme="secondary"
        onClick={() => changeFilter(PopularityFilterEnum.FASTEST)}
        accented={selectedFilter === PopularityFilterEnum.FASTEST}
      >
        Самый быстрый
      </Button>
      <Button
        theme="secondary"
        onClick={() => changeFilter(PopularityFilterEnum.BALANCED)}
        accented={selectedFilter === PopularityFilterEnum.BALANCED}
      >
        Оптимальный
      </Button>
    </StyledButtonGroup>
  );
};

// Layout

const StyledButtonGroup = styled(ButtonGroup)`
  width: 100%;
`;
