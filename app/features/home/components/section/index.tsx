import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Spacing } from '@app/theme/metric';

interface SectionProps {
  children: React.ReactNode;
  testID?: string;
}

const Section: React.FC<SectionProps> = ({ children, testID }) => {
  return (
    <View style={styles.container} testID={testID}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: Spacing.l,
  },
});

export default Section;
