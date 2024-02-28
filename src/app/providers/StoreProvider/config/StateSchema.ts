import { CounterSchema } from 'entity/Counter';
import { UserSchema } from 'entity/User';
import { LoginSchema } from 'features/AuthByUsername';
import { EnhancedStore, Reducer, ReducersMapObject, UnknownAction } from '@reduxjs/toolkit';

export interface StateScheme {
  counter: CounterSchema;
  user: UserSchema;
  // Async
  loginForm?: LoginSchema;
}

export type StateSchemaKey = keyof StateScheme;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateScheme>;
  reduce: (state: StateScheme, action: UnknownAction) => StateScheme;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateScheme> {
  reducerManager: ReducerManager;
}
