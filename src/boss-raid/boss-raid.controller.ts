import { Body, Controller, Post } from '@nestjs/common';
import { BossRaidService } from './boss-raid.service';
import { CreatedBossRaidDto } from './dto/response/created-bossRaid.dto';
import { CreateBossRaidDto } from './dto/request/create-bossRaid.dto';

@Controller('bossRaid')
export class BossRaidController {
  constructor(private bossRaidService: BossRaidService) {}

  @Post('enter')
  createOne(
    @Body() createBossRaidDto: CreateBossRaidDto,
  ): Promise<CreatedBossRaidDto> {
    return this.bossRaidService.createOne(createBossRaidDto);
  }
}
