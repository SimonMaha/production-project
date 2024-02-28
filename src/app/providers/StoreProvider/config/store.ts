import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateScheme } from './StateSchema';
import { counterReducer } from 'entity/Counter';
import { userReducer } from 'entity/User';
import { createReducerManager } from './reducerManager';


export function createReduxStore(
  initialState?: StateScheme,
  asyncReducers?: ReducersMapObject<StateScheme>
) {
  const rootReducer: ReducersMapObject<StateScheme> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore<StateScheme>({
    reducer: reducerManager.reduce ,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });

  // @ts-expect-error need to wait for new lesson
  store.reducerManager = reducerManager;

  return store;
}
