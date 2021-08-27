import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { UserDTO } from './dtos/user.dto';
import { IUser } from './interfaces/user.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  index(): IUser[] {
    return this.usersService.findAll();
  }

  @Post()
  @ApiBody({ type: UserDTO })
  create(@Body() user: UserDTO): IUser {
    return this.usersService.create(user);
  }
}
