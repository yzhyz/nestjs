import { Controller, Get, Param, Post, Put, Delete, Body, HttpCode } from '@nestjs/common';
import { User } from '../interface/user.interface';
import { UserService } from '../services/user.service';
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @Get()
    async findAll() {
        return await this.userService.find();
    }

    @Get(':id')
    async findOne(@Param() params): Promise<User> {
        return await this.userService.findOne(params.id);
    }

    @Post()
    async create(@Body() user: User) {
        return await this.userService.create(user);
    }

    @Put()
    async edit() {
        return await this.userService.edit();
    }

    @Delete()
    async remove() {
        return await this.userService.remove();
    }
}
