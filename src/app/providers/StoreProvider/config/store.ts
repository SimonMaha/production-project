import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateScheme } from './StateSchema';
import { counterReducer } from 'entity/Counter';
import { userReducer } from 'entity/User';


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
