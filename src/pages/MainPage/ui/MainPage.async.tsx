import { lazy } from 'react';

export const MainPageAsync = lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, 1500));
  return import('./MainPage');
});
