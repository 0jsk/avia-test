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
      <Text type="span" color="secondary">
        {segment.origin} - {segment.destination}
      </Text>
      <Text type="p" bold>
        {formatDate('HH:mm', segment.dateStart)}
        -
        {formatDate('HH:mm', segment.dateEnd)}
      </Text>
    </Stack>
    <Stack>
      <Text type="span" color="secondary">
        В пути
      </Text>
      <Text type="p" bold>
        {formatDate('HH mm', segment.duration)}
      </Text>
    </Stack>
    <Stack>
      <Text type="span" color="secondary">
        {segment.stops.length} Пересадки
      </Text>
      <Text type="p" bold>
        {segment.stops.join(', ')}
      </Text>
    </Stack>
  </Container>
);

// Layout
const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
