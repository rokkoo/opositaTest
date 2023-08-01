import { Spacing } from '@app/theme/metric';

export type Size = (typeof Spacing)[keyof typeof Spacing];

export const Direction = {
  X: 'x',
  Y: 'y',
};

export type DirectionType = (typeof Direction)[keyof typeof Direction];
