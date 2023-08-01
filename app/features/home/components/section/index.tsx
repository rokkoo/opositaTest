import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Spacing } from '@app/theme/metric';

interface SectionProps {
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: Spacing.l,
  },
});

export default Section;
