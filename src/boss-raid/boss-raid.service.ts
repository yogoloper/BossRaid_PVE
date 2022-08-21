import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BossRaid } from './entities/boss-raid.entity';
import { Repository } from 'typeorm';
import { CreateBossRaidDto } from './dto/request/create-bossRaid.dto';
import { CreatedBossRaidDto } from './dto/response/created-bossRaid.dto';
import axios from 'axios';

@Injectable()
export class BossRaidService {
  constructor(
    @InjectRepository(BossRaid)
    private readonly bossRaidRepository: Repository<BossRaid>,
  ) {}

  async createOne(
    createBossRaidDto: CreateBossRaidDto,
  ): Promise<CreatedBossRaidDto> {
    const products = await axios.get('http://localhost:3000/api/user');
    console.log(typeof products.data);
    console.log(products.data.bossRaids[0].levels);

    return null;
  }
}
