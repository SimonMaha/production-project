import { CounterSchema } from 'entity/Counter';
import { UserSchema } from 'entity/User';

export interface StateScheme {
  counter: CounterSchema;
  user: UserSchema;
}
