import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import * as moment from 'moment-timezone';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column({ default: moment().format('YYYY-MM-DD HH:mm:ss') })
  createdAt: string;

  @Column({ nullable: true })
  updatedAt: string;
}
