import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, 1500));
  return import('./ArticleDetailsPage');
});
