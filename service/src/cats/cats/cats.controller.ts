import { Controller, Get, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Get()
    async findAll() {
        return [{
            id: 1,
            name: '小明',
            age: 18,
        }];
    }

    @Post()
    create() {
        return 'This action adds a new cat';
    }
}
