import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column()
  createdAt: string;

  @Column({ nullable: true })
  updatedAt: string;
}
