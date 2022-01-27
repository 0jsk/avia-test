import React from 'react';
import { Text } from '@app/shared/ui';

type Props = {
  amount: number;
};

export const Price = ({ amount }: Props) => (
  <Text type="h3" color="accent">
    {amount} Р
  </Text>
);
