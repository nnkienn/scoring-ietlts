import { IsEmail, isEmail, IsEnum, IsOptional, IsString, isString } from "class-validator";
import { Role } from '@prisma/client';

export class CreateUserDto {
    @IsString()
    username : string;
    
    @IsEmail()
    email : string;

    @IsEnum(Role)
    role : Role

    @IsOptional()
    @IsString()
    avatarUrl?: string;

    
    @IsOptional()
    @IsString()
    dateOfBirth?: string
}
