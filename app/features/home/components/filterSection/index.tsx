import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import Section from '../section';
import AppText from '@app/features/commons/core/text';
import Spacer from '@app/features/commons/spacer';
import { Spacing } from '@app/theme/metric';
import { useAppTheme } from '@app/theme/hooks/useTheme';
import { AppTheme } from '@app/theme/types';
import useFilter from './hooks/useFilter';

const FilterSection = () => {
  const { filterText, handleTextChange } = useFilter();
  const { theme } = useAppTheme();
  const styles = styling(theme);

  return (
    <Section testID="filter-section">
      <AppText bold>Filtra por un nombre</AppText>
      <Spacer size={Spacing.l} />
      <TextInput
        testID="input"
        placeholder="A Game of Thrones"
        onChangeText={handleTextChange}
        value={filterText ?? ''}
        style={styles.input}
      />
    </Section>
  );
};

const styling = (theme: AppTheme) => {
  return StyleSheet.create({
    input: {
      borderWidth: 3,
      paddingVertical: Spacing.m,
      paddingHorizontal: Spacing.l,
      borderRadius: 4,
      borderColor: theme.tertiary,
    },
  });
};

export default FilterSection;
