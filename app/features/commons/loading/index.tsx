import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const Loading = () => {
  return (
    <View testID="loading">
      <ActivityIndicator size="large" />
    </View>
  );
};

export default Loading;
