import React from 'react';

import AppLayout from '@app/features/commons/layout';
import FavoritesBooksSection from '@app/features/home/components/favoritesBooksSection';
import BooksListSection from '@app/features/home/components/booksListSection';
import RecentsBooksSection from '@app/features/home/components/recentsBooksSection';
import { Spacing } from '@app/theme/metric';
import Spacer from '../commons/spacer';
import HomeHeader from './components/homeHeader';

const Home = () => {
  return (
    <AppLayout>
      <HomeHeader />
      <Spacer size={Spacing.xl} />
      <FavoritesBooksSection />
      <BooksListSection />
      <RecentsBooksSection />
    </AppLayout>
  );
};

export default Home;
