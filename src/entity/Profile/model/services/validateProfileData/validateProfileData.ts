import { Profile, ValidationProfileError } from '../../types/profile';

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidationProfileError.INCORRECT_USER_DATA];
  }

  const {
    firstname,
    lastname,
    age,
    country,
  } = profile;

  const errors: ValidationProfileError[] = [];

  if (!firstname || !lastname) {
    errors.push(ValidationProfileError.INCORRECT_USER_DATA);
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ValidationProfileError.INCORRECT_AGE);
  }

  if (!country) {
    errors.push(ValidationProfileError.INCORRECT_COUNTRY);
  }

  return errors;
};
