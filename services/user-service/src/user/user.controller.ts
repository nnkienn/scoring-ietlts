import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }
    @Post()
    create(@Body() userCreateDto: CreateUserDto) {
        return this.userService.create(userCreateDto)
    }
    @Get()
    findAll(){
        return this.userService.findAll()
    }

}
