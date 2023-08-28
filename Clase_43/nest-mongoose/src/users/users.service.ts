import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/users.schema';
import { Model } from 'mongoose';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private usersModel: Model<UserDocument>,
    private config: ConfigService,
  ) {}

  create(userInfo: CreateUserDto) {
    return this.usersModel.create(userInfo);
  }

  findAll() {
    console.log(this.config.get('ADMIN_EMAIL'));
    return this.usersModel.find();
  }

  findOne(id: string) {
    return this.usersModel.findById(id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.usersModel.findByIdAndUpdate(id, updateUserDto, { new: true });
  }

  remove(id: string) {
    return this.usersModel.findByIdAndDelete(id);
  }
}
