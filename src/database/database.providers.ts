import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3360,
        username: 'root',
        password: 'root',
        database: 'bd_bibliotroca',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: false,
        logging: false,
        namingStrategy: new SnakeNamingStrategy(),
      });

      return dataSource.initialize();
    },
  },
];
