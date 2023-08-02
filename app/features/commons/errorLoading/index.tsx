import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppText from '../core/text';
import { Spacing } from '@app/theme/metric';
import Icon from 'react-native-vector-icons/AntDesign';
import Spacer from '../spacer';
import { Button } from 'react-native';

interface ErrorLoadingProps {
  OnretryPress: () => void;
}

const ErrorLoading: React.FC<ErrorLoadingProps> = ({ OnretryPress }) => {
  return (
    <View style={styles.container}>
      <Icon name={'meh'} size={42} />
      <Spacer size={Spacing.xl} />
      <AppText bold>Hemos tenenido un problema</AppText>
      <Spacer size={Spacing.xl} />
      <Button title="Intentar de nuevo" onPress={OnretryPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacing.xl,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ErrorLoading;
