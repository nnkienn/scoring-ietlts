import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(private prisma : PrismaService){}

    create(data : CreateUserDto){
        return this.prisma.user.create({data})
    }
    findAll(){
        return this.prisma.user.findMany()
    }
}
