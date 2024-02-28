import { DeepPartial } from 'ts-essentials';
import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = { username: 'user' };

    expect(loginReducer(
      state as LoginSchema,
      loginActions.setUsername('admin')
    )).toEqual({ username: 'admin' });
  });

  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = { password: 'user' };

    expect(loginReducer(
      state as LoginSchema,
      loginActions.setPassword('admin')
    )).toEqual({ password: 'admin' });
  });
});
