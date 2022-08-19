import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'BOSSRAID_DB',
  entities: [__dirname + '/../../**/*.entity{.js,.ts}'],
  synchronize: true,
};