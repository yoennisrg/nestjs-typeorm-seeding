import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT) || 5432,
  username: process.env.DATABASE_USER || 'postgres',
  password: process.env.DATABASE_PWD || 'pgsql',
  database: process.env.DATABASE_NAME || 'demo',
  entities: ['src/entities/*.entity.ts'],
  synchronize: Boolean(process.env.ENTITY_SYNC) || false,
  autoLoadEntities: Boolean(process.env.ENTITY_AUTO_LOAD) || false,
  connectTimeoutMS: 2000,
  logging: ['error', 'migration', 'schema'],
};
