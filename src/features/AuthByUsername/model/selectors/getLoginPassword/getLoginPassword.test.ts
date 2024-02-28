import { StateScheme } from 'app/providers/StoreProvider';
import { DeepPartial } from 'ts-essentials';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', () => {
  test('should return value', () => {
    const state: DeepPartial<StateScheme> = {
      loginForm: {
        password: 'password'
      }
    };
    expect(getLoginPassword(state as StateScheme)).toEqual('password');
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateScheme> = { };
    expect(getLoginPassword(state as StateScheme)).toEqual('');
  });
});
