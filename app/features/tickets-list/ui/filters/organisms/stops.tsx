import {
  $stopsFilter,
  StopFilter,
  mapStopFilterToString,
  selectFilter
} from '@app/features/tickets-list/model';
import { Checkbox } from '@app/shared/ui';
import { Paper } from '@app/features/tickets-list/ui/filters';
import styled from 'styled-components';
import { theme } from '@app/assets';
import { useEvent } from 'effector-react';
import { useMemo } from 'react';
import { useStore } from 'effector-react/scope';

export const Stops = () => {
  const selectedTypes = useStore($stopsFilter);
  const selectType = useEvent(selectFilter);

  const types = useMemo(() => Object.values(StopFilter), []);

  return (
    <Paper title="Количество пересадок">
      <Container>
        {types.map(type => (
          <StyledCheckbox
            key={type}
            type="checkbox"
            checked={selectedTypes.includes(type)}
            onChange={() => selectType(type)}
          >
            {mapStopFilterToString[type]}
          </StyledCheckbox>
        ))}
      </Container>
    </Paper>
  );
};

// Layout
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledCheckbox = styled(Checkbox)`
  cursor: pointer;

  padding: ${theme.spacePx}px ${theme.spacePx * 2}px;

  &[data-checked='true'], &:hover {
    background-color: #f1fcff;
  }

  &:hover:before {
    border-color: ${theme.color.primary};
  }
`;
