import { lazy } from 'react';

export const ArticlesPageAsync = lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, 1500));
  return import('./ArticlesPage');
});
