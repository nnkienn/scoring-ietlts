import { Injectable, Post, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../prisma/prisma.service';
import { RegisterDto } from './dto/register.dto/register.dto';
import * as bcrypt from 'bcrypt';
import { Role } from '@prisma/client';
import { LoginDto } from './dto/login.dto/login.dto';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService
    ) { }
    async register(dto: RegisterDto) {
        const hashed = await bcrypt.hash(dto.password, 10);
        const role = dto.role.toLowerCase();
        if (role !== 'student' && role !== 'teacher') {
            throw new Error('Invalid role');
        }
        const user = await this.prisma.user.create({
            data: {
                email: dto.email,
                username: dto.username,
                password: hashed,
                role: role as Role,
            }
        });
        const token = this.jwtService.sign({ sub: user.id }); // <-- Sửa tại đây
        return { user, token };
    }

    async login(dto: LoginDto) {
        const user = await this.prisma.user.findUnique({ where: { email: dto.email } });
        if (!user || !user.password) throw new UnauthorizedException('Invalid credentials');
        const isMatch = await bcrypt.compare(dto.password, user.password);
        if (!isMatch) throw new UnauthorizedException('Invalid credentials');
        const jwtToken = this.jwtService.sign({ sub: user.id }); // <-- Sửa tại đây
        return { user, jwtToken };
    }

}
