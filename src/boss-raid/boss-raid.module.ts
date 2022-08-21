import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BossRaid } from './entities/boss-raid.entity';
import { BossRaidController } from './boss-raid.controller';
import { BossRaidService } from './boss-raid.service';

@Module({
  imports: [TypeOrmModule.forFeature([BossRaid])],
  controllers: [BossRaidController],
  providers: [BossRaidService],
  exports: [BossRaidService],
})
export class BossRaidModule {}
