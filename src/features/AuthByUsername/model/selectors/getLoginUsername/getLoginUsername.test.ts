import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from 'ts-essentials';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'username'
      }
    };
    expect(getLoginUsername(state as StateSchema)).toEqual('username');
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = { };
    expect(getLoginUsername(state as StateSchema)).toEqual('');
  });
});
