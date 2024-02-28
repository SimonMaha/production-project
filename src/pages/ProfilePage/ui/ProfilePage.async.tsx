import { lazy } from 'react';

export const ProfilePageAsync = lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, 1500));
  return import('./ProfilePage');
});
