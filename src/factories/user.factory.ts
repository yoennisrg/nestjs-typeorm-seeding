import Faker from 'faker';
import { User } from 'src/entities/user.entity';
import { define } from 'typeorm-seeding';

define(User, (faker: typeof Faker) => {
  const gender = faker.random.number(1);

  const user = new User();
  user.firstName = faker.name.firstName(gender);
  user.lastName = faker.name.lastName(gender);
  user.age = faker.ramdom.number();
  return user;
});
