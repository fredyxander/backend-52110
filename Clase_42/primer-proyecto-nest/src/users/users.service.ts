import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  users: Array<User>; //User[]

  constructor() {
    this.users = [];
  }

  create(userInfo: CreateUserDto) {
    let newId = 0;
    if (this.users.length > 0) {
      newId = this.users.length + 1;
    } else {
      newId = 1;
    }
    const newUser: User = {
      id: newId,
      first_name: userInfo.first_name,
      email: userInfo.email,
      password: userInfo.password,
    };
    this.users.push(newUser);
    return newUser;
  }

  findAll() {
    return this.users;
  }

  findOne(userId: number) {
    const user = this.users.find((u) => u.id === userId);
    if (user) {
      return user;
    } else {
      return null;
    }
  }

  update(userId: number, updateInfo: UpdateUserDto) {
    const userIndex = this.users.findIndex((u) => u.id === userId);
    this.users[userIndex] = updateInfo;
    return 'usuario actualizado';
  }

  remove(userId: number) {
    const newUsers = this.users.filter((u) => u.id !== userId);
    this.users = newUsers;
    return 'usuario eliminado';
  }
}
