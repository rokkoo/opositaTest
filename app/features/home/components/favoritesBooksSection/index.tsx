import React from 'react';

import Section from '@app/features/home/components/section';
import FavoriteBooksList from './favoriteBooksList';
import AppText from '@app/features/commons/core/text';
import Spacer from '@app/features/commons/spacer';
import { Spacing } from '@app/theme/metric';
import { useFavoriteBooks } from '@app/stores/favoriteBooks/hooks/useFavoritesBooks';

const FavoritesBooksSection = () => {
  const { hasFavorireBooks } = useFavoriteBooks();

  if (!hasFavorireBooks) {
    return null;
  }

  return (
    <Section>
      <AppText bold>Tus libros favoritos</AppText>
      <Spacer size={Spacing.l} />
      <FavoriteBooksList />
    </Section>
  );
};

export default React.memo(FavoritesBooksSection);
