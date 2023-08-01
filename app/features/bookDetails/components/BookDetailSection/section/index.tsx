import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppText from '@app/features/commons/core/text';
import Spacer from '@app/features/commons/spacer';
import { useAppTheme } from '@app/theme/hooks/useTheme';
import { FontSize, Spacing } from '@app/theme/metric';

interface SectionPros {
  categoryName: string;
  value: string | number;
}

const Section: React.FC<SectionPros> = ({ categoryName, value }) => {
  const { theme } = useAppTheme();

  return (
    <View>
      <AppText fontSize={FontSize.xl} color={theme.text.secondary} bold>
        {categoryName}
      </AppText>
      <Spacer size={Spacing.l} />
      <AppText bold style={styles.textValue}>
        {value}
      </AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  catergory: {},
  textValue: { lineHeight: Spacing.l },
});

export default React.memo(Section);
