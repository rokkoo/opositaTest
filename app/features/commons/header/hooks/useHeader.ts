import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

const useHeader = () => {
  const navigation = useNavigation();

  const handleBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return {
    handleBackPress,
  };
};

export default useHeader;
