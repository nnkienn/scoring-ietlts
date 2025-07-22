import { IsEmail, IsNotEmpty, IsString, IsIn } from 'class-validator'

export class RegisterDto {
  @IsEmail()
  email: string

  @IsNotEmpty()
  username: string

  @IsNotEmpty()
  password: string

  @IsIn(['student', 'teacher']) // ✅ kiểm tra role hợp lệ
  role: string
}
