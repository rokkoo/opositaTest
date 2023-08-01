import React from 'react';
import { FlatList, FlatListProps } from 'react-native';

interface AppListProps<T> extends FlatListProps<T> {}

function AppList<T>(props: AppListProps<T>) {
  return <FlatList {...props} />;
}

export default AppList;
