import React, { useMemo } from 'react';
import {
  Text,
  TextProps,
  StyleSheet,
  StyleProp,
  TextStyle,
} from 'react-native';

import { useAppTheme } from '@app/theme/hooks/useTheme';
import { FontSize } from '@app/theme/metric';
import { AppTheme } from '@app/theme/types';
import { FontSizeValue } from '@app/features/commons/core/text/types';

interface CustomTextProps extends TextProps {
  bold?: boolean;
  fontSize?: FontSizeValue;
  color?: string;
}

const AppText: React.FC<CustomTextProps> = ({
  bold,
  fontSize = FontSize.m,
  style,
  children,
  color,
  ...restProps
}) => {
  const { theme } = useAppTheme();
  const styles = styling(theme);

  const textStyle = useMemo((): StyleProp<TextStyle> => {
    return [
      styles.text,
      {
        fontWeight: bold ? 'bold' : 'normal',
        fontSize,
        color: color ?? theme.text.primary,
      },
      style,
    ];
  }, [styles.text, bold, fontSize, color, theme.text.primary, style]);

  return (
    <Text style={textStyle} {...restProps}>
      {children}
    </Text>
  );
};

const styling = (theme: AppTheme) => {
  return StyleSheet.create({
    text: {
      fontFamily: 'System', // Change this to your preferred font family
      color: theme.text.primary,
    },
  });
};

export default AppText;
