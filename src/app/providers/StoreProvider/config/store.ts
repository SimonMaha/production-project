import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateScheme } from './StateSchema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';


export function createReduxStore(initialState?: StateScheme) {
  const rootReducer: ReducersMapObject<StateScheme> = {
    counter: counterReducer,
    user: userReducer
  };

  return configureStore<StateScheme>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
