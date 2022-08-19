import { Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreatedUserDto } from './dto/response/created-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  createOne(): Promise<CreatedUserDto> {
    return this.userService.createOne();
  }
}
