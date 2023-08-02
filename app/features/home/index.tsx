import React from 'react';

import AppLayout from '@app/features/commons/layout';
import FavoritesBooksSection from '@app/features/home/components/favoritesBooksSection';
import BooksListSection from '@app/features/home/components/booksListSection';
import RecentsBooksSection from '@app/features/home/components/recentsBooksSection';
import { Spacing } from '@app/theme/metric';
import Spacer from '../commons/spacer';
import HomeHeader from './components/homeHeader';
import useBooks from './components/booksListSection/hooks/useBooks';
import Loading from '../commons/loading';
import ErrorLoading from '../commons/errorLoading';

const Home = () => {
  const { error, isLoading, refetch } = useBooks();

  if (isLoading) {
    return (
      <AppLayout>
        <HomeHeader />
        <Spacer size={Spacing.xxl} />
        <Loading />
      </AppLayout>
    );
  }

  if (error) {
    return (
      <AppLayout>
        <HomeHeader />
        <Spacer size={Spacing.xxl} />
        <ErrorLoading OnretryPress={refetch} />
      </AppLayout>
    );
  }

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
