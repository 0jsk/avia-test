import { theme } from './theme';

export const space = (amount: number): Style => `${amount * theme.spacePx}px`;
