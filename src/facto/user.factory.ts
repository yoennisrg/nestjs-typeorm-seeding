import { Faker } from '@faker-js/faker';
import { User } from 'src/entities/user.entity';
import { define } from 'typeorm-seeding';

define(User, (faker: Faker) => {
  const user = new User();
  user.firstName = faker.name.firstName();
  user.lastName = faker.name.lastName();
  user.age = faker.datatype.number();
  return user;
});
