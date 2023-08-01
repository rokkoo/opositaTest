import React from 'react';
import { View, ViewProps } from 'react-native';
import { Spacing } from '@app/theme/metric';
import { Direction, DirectionType, Size } from './types';

interface SpacerProps extends ViewProps {
  size?: Size;
  direction?: DirectionType;
}

const Spacer: React.FC<SpacerProps> = ({
  size = Spacing.m,
  direction = Direction.X,
  ...restProps
}) => {
  if (direction === Direction.X) {
    return <View style={[{ paddingTop: size }]} {...restProps} />;
  }

  return <View style={[{ paddingLeft: size }]} {...restProps} />;
};

export default Spacer;
