import { Action, createAsyncThunk, ThunkDispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entity/User';
import { LoginSchema } from 'features/AuthByUsername';
import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localstorage';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export type LoginThunkDispatch = ThunkDispatch<LoginSchema, never, Action>;

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', authData);
      const userData = response.data;

      if (!userData) {
        throw new Error('Empty response');
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(userData));
      thunkAPI.dispatch(userActions.setAuthData(userData));

      return response.data;
    } catch (e) {
      console.log('Error in loginByUsername: ', e);
      return thunkAPI.rejectWithValue('Error');
    }
  },
);
