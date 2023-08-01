import { Book } from '@app/services/dtos/booksDTO';
import { NavigationProp } from '@react-navigation/native';

export const STACK_SCREENS = {
  Home: 'home',
  BookDetails: 'bookDetails',
} as const;

export type RootStackParamList = {
  [STACK_SCREENS.Home]: undefined;
  [STACK_SCREENS.BookDetails]: { book: Book };
};

export type RootNavigationProp = NavigationProp<RootStackParamList>;
