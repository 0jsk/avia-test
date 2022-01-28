import type { Segment as ISegment } from '@app/modules/Segment';
import { Stack } from '../molecules';
import { Text } from '@app/shared/ui';
import { formatDate } from '@app/shared/lib/format-date';
import styled from 'styled-components';

type Props = {
  segment: ISegment;
};

export const Segment = ({ segment }: Props) => (
  <Container>
    <Stack>
      <UppercaseText type="span" color="secondary" bold>
        {segment.origin}&nbsp;&ndash;&nbsp;{segment.destination}
      </UppercaseText>
      <Text type="p" bold>
        {formatDate('HH:mm', segment.dateStart)}
        &nbsp;&ndash;&nbsp;
        {formatDate('HH:mm', segment.dateEnd)}
      </Text>
    </Stack>
    <Stack>
      <UppercaseText type="span" color="secondary" bold>
        В пути
      </UppercaseText>
      <Text type="p" bold>
        {formatDate('HH mm', segment.duration)}
      </Text>
    </Stack>
    <Stack>
      <UppercaseText type="span" color="secondary" bold>
        {segment.stops.length > 0 ? `${segment.stops.length} Пересадки` : 'Без пересадок'}
      </UppercaseText>
      <Text type="p" bold>
        {segment.stops.join(', ')}
      </Text>
    </Stack>
  </Container>
);

// Layout
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const UppercaseText = styled(Text)`
  text-transform: uppercase;
`;
