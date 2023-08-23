import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() userInfo: CreateUserDto) {
    if (!userInfo.first_name || !userInfo.email || !userInfo.password) {
      throw new HttpException('datos incompletos', HttpStatus.BAD_REQUEST);
    }
    //const createUserDto = req.body;
    const userCreated = this.usersService.create(userInfo);
    return { status: 'success', data: userCreated };
  }

  @Get()
  findAll() {
    const users = this.usersService.findAll();
    return { status: 'success', data: users };
  }

  @Get(':id')
  findOne(@Param('id') userId: string) {
    //const userId = req.params.id
    const user = this.usersService.findOne(+userId); //parseInt(userId)
    return { status: 'success', data: user };
  }

  @Patch(':id')
  update(@Param('id') userId: string, @Body() updateInfo: UpdateUserDto) {
    const response = this.usersService.update(+userId, updateInfo);
    return { status: 'success', message: response };
  }

  @Delete(':id')
  remove(@Param('id') userId: string) {
    const response = this.usersService.remove(+userId);
    return { status: 'success', message: response };
  }
}
