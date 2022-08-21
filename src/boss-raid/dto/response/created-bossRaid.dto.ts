import { BossRaid } from '../../entities/boss-raid.entity';
export class CreatedBossRaidDto {
  isEntered: boolean;
  raidRecordId: number;

  constructor(bossRaid: BossRaid, isEntered: boolean) {
    this.isEntered = isEntered;
    this.raidRecordId = bossRaid.raidRecordId;
  }
}
