import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class RegisterUserDto {
  @ApiProperty({ example: 'Frank', description: 'Nome do usuário' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'frank@gmail.com', description: 'Email do usuário' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Frank12345', description: 'Senha do usuário', minLength: 6 })
  @IsString()
  @MinLength(6)
  password: string;
}