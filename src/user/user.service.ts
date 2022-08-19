import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreatedUserDto } from './dto/response/created-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async createOne(): Promise<CreatedUserDto> {
    let createUser = this.userRepository.create();
    await this.userRepository.save(createUser);

    return new CreatedUserDto(createUser);
  }
}
