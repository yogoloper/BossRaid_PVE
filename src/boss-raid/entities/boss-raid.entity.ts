import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import * as moment from 'moment-timezone';

@Entity()
export class BossRaid {
  @PrimaryGeneratedColumn()
  raidRecordId: number;

  @Column({ default: 0 })
  score: number;

  @Column({ default: moment().format('YYYY-MM-DD HH:mm:ss') })
  enterTime: string;

  @Column({ nullable: true })
  endTime: string;

  @ManyToOne(() => User, (user) => user.userId)
  @JoinColumn({
    name: 'enterdUserId',
    referencedColumnName: 'userId',
  })
  enterdUserId: number;
}
