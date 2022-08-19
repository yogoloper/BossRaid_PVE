import { User } from '../../entities/user.entity';
export class CreatedUserDto {
  userId: number;

  constructor(user: User) {
    this.userId = user.userId;
  }
}
