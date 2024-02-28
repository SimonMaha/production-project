import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { StateScheme } from '../config/StateSchema';
import { DeepPartial } from 'ts-essentials';
import { ReducersMapObject } from '@reduxjs/toolkit';

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<StateScheme>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateScheme>>;
}

export const StoreProvider = (props: StoreProviderProps) => {
  const {
    children,
    initialState,
    asyncReducers,
  } = props;

  const store = createReduxStore(
    initialState as StateScheme,
    asyncReducers as ReducersMapObject<StateScheme>,
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
