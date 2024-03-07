import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';
import type {
  StateScheme,
  StateSchemaKey,
  ReduxStoreWithManager,
  ThunkExtraArg,
  ThunkConfig
} from './config/StateSchema';

export {
  StoreProvider,
  createReduxStore,
  AppDispatch,
  StateScheme,
  StateSchemaKey,
  ReduxStoreWithManager,
  ThunkExtraArg,
  ThunkConfig
};
