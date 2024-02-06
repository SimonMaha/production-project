import { lazy } from 'react';

export const AboutPageAsync = lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, 1500));
  return import('./AboutPage');
});