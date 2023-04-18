import { User } from './models/user.entity';

export const catsProviders = [
  {
    provide: 'USER_REPOSITORY',
    useValue: User,
  },
];
