import {
  $companyFilter,
  CompanyFilter,
  mapCompanyFilterToString,
  setCompanyFilter
} from '@app/features/tickets-list/model';
import { Checkbox } from '@app/shared/ui';
import { Paper } from '@app/features/tickets-list/ui/filters';
import styled from 'styled-components';
import { theme } from '@app/assets';
import { useEvent } from 'effector-react';
import { useMemo } from 'react';
import { useStore } from 'effector-react/scope';

export const Companies = () => {
  const selectedType = useStore($companyFilter);
  const selectType = useEvent(setCompanyFilter);

  const types = useMemo(() => Object.values(CompanyFilter), []);

  return (
    <Paper title="Компания">
      <Container>
        {types.map(type => (
          <StyledCheckbox
            key={type}
            type="radio"
            checked={type === selectedType}
            onChange={() => selectType(type)}
          >
            {mapCompanyFilterToString[type]}
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
