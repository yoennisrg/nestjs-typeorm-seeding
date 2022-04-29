import typeormConfig from './ormconfig';

export default {
  ...typeormConfig,
  migrationsTableName: 'migrations',
  migrations: ['src/migrations/*.ts'],
  subscribers: ['src/subscriber/*.ts'],
  cli: {
    migrationsDir: 'src/migrations',
    entitiesDir: 'src/entities',
    subscribersDir: 'src/subscribers',
  },
};

// import path from "path";
// import { ConnectionOptions } from "typeorm";

// export default {
//   name: "default",
//   type: "better-sqlite3",
//   database: ":memory:",
//   synchronize: true,
//   migrationsRun: true,
//   dropSchema: false,
//   entities: [path.join(__dirname, "..", "entities", "**", "*.*"), path.join(__dirname, "..", "entities", "*.*")],
//   migrations: [path.join(__dirname, "migrations", "*.*")],
//   cli: {
//     entitiesDir: path.join(__dirname, "..", "entities"),
//     migrationsDir: path.join(__dirname, "migrations")
//   }
// } as ConnectionOptions;
