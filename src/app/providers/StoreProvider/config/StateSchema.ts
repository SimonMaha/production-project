import { CounterSchema } from 'entity/Counter';
import { UserSchema } from 'entity/User';
import { LoginSchema } from 'features/AuthByUsername';

export interface StateScheme {
  counter: CounterSchema;
  user: UserSchema;
  loginForm: LoginSchema;
}
