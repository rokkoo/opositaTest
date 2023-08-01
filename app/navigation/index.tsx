import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList, STACK_SCREENS } from './types';
import Home from '@app/features/home';
import BookDetails from '@app/features/bookDetails';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigationContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={STACK_SCREENS.Home} component={Home} />
        <Stack.Screen
          name={STACK_SCREENS.BookDetails}
          component={BookDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigationContainer;
