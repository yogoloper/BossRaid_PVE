import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { BossRaidModule } from './boss-raid/boss-raid.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './common/configs/typeorm.config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(typeORMConfig),
    UserModule,
    BossRaidModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
