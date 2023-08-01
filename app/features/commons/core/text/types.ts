import { FontSize } from '@app/theme/metric';

type FontSizeKeys = keyof typeof FontSize;
export type FontSizeValue = (typeof FontSize)[FontSizeKeys];
