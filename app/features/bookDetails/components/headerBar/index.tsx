import React, { useMemo } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import Header from '@app/features/commons/header';
import { useAppTheme } from '@app/theme/hooks/useTheme';
import useHeaderBar from './hooks/useHeaderBar';
import { Colors } from '@app/theme/colors';

const HeaderBar = () => {
  const { theme } = useAppTheme();
  const { handlePress, isFavoriteBook } = useHeaderBar();

  const color = useMemo(() => {
    if (isFavoriteBook) {
      return Colors.yellow;
    }

    return theme.background;
  }, [isFavoriteBook, theme.background]);

  const iconName = useMemo(() => {
    if (isFavoriteBook) {
      return 'star';
    }

    return 'staro';
  }, [isFavoriteBook]);

  return (
    <Header
      rightChildren={
        <Icon name={iconName} size={24} color={color} onPress={handlePress} />
      }
    />
  );
};

export default HeaderBar;
