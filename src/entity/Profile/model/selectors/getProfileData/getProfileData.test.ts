import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from 'ts-essentials';
import { getProfileData } from './getProfileData';
import { Currency } from 'entity/Currency';
import { Country } from 'entity/Country';

describe('getProfileData.test', () => {
  test('should return profile data', () => {
    const data = {
      firstname: 'John',
      lastname: 'Vasylyk',
      age: 12,
      currency: Currency.UAH,
      country: Country.Ukraine,
      city: 'Ternopil',
      username: 'Vasylyk',
    };

    const state: DeepPartial<StateSchema> = { profile: { data } };

    expect(getProfileData(state as StateSchema)).toEqual(data);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = { };
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
