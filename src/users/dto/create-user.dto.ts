   import { ApiProperty } from '@nestjs/swagger';
   import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from 'class-validator';

    export class CreateUserDto {
    @ApiProperty({ example: 'Jonas Fortes', description: 'Nome completo do usuário' })
    @IsNotEmpty()
    name: string;

    @ApiProperty({ example: 'jonas@example.com', description: 'Email do usuário' })
    @IsEmail()
    email: string;

    @ApiProperty({example: 'jonas@example.com', description: 'Email do usuário'})
    @IsString()
    @IsNotEmpty({message: 'campo obrigatório'})
    password: string;
    }

