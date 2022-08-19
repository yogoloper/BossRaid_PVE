import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreatedUserDto } from './dto/response/created-user.dto';
import * as moment from 'moment-timezone';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async createOne(): Promise<CreatedUserDto> {
    let createUser = this.userRepository.create({
      createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
    });
    await this.userRepository.save(createUser);

    return new CreatedUserDto(createUser);
  }
}
