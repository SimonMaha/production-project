import { ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { StateSchemaKey, ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { Reducer } from '@reduxjs/toolkit';

export type ReducerList = {
  [name in StateSchemaKey]?: Reducer;
}

type ReducersListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
  children: ReactNode;
  reducers: ReducerList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader = ({ children, reducers, removeAfterUnmount  }: DynamicModuleLoaderProps) => {
  const dispatch = useDispatch();
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });


    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]: ReducersListEntry) => {
          store.reducerManager.remove(name);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
    // eslint-disable-next-line
  }, []);
  
  return (
    <>
      {children}
    </>
  );
};
