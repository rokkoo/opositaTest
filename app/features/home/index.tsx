import React from 'react';

import AppLayout from '@app/features/commons/layout';
import FavoritesBooksSection from '@app/features/home/components/favoritesBooksSection';
import BooksListSection from '@app/features/home/components/booksListSection';
import RecentsBooksSection from '@app/features/home/components/recentsBooksSection';

const Home = () => {
  return (
    <AppLayout>
      <FavoritesBooksSection />
      <BooksListSection />
      <RecentsBooksSection />
    </AppLayout>
  );
};

export default Home;
