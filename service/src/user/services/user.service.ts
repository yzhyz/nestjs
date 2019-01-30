import { Injectable } from '@nestjs/common';
import { User } from '../interface/user.interface';
import { IUserService } from '../interface/user-service.interface';
import {UserEntity} from '../entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from 'typeorm';
@Injectable()
export class UserService {
    constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>   ) {}

    async find() {
        return this.userRepository.find();
    }

    async findOne(id: number): Promise<User> {
        return {
            id,
            name: '小明',
            age: 18,
        };
    }

    async create(user): Promise<User> {
        return user;
    }

    async edit() {}

    async remove() {}

}
