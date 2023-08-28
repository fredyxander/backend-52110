import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('/api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() userBody: CreateUserDto) {
    try {
      const userCreated = await this.usersService.create(userBody);
      return { status: 'success', data: userCreated };
    } catch (error) {
      return { status: 'error', message: error.message };
    }
  }

  @Get()
  async findAll() {
    try {
      const users = await this.usersService.findAll();
      return { status: 'success', data: users };
    } catch (error) {
      return { status: 'error', message: error.message };
    }
  }

  @Get(':id')
  async findOne(@Param('id') userId: string) {
    try {
      const user = await this.usersService.findOne(userId);
      return { status: 'success', data: user };
    } catch (error) {
      return { status: 'error', message: error.message };
    }
  }

  @Patch(':id')
  async update(
    @Param('id') userId: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    try {
      const userUpdated = await this.usersService.update(userId, updateUserDto);
      return { status: 'success', data: userUpdated };
    } catch (error) {
      return { status: 'error', message: error.message };
    }
  }

  @Delete(':id')
  async remove(@Param('id') userId: string) {
    try {
      const result = await this.usersService.remove(userId);
      return { status: 'success', message: result };
    } catch (error) {
      return { status: 'error', message: error.message };
    }
  }
}
