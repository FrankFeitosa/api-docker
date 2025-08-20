import {IsEmail, IsString, MinLength} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'

export class LoginDto{

@ApiProperty({description: 'Nome de usuário ou email do usuário'})
@IsString({message: 'O nome de usuário precisa ser textual'})
name: string;

@ApiProperty({example: 'usuario@exemplo.com', description: 'Email do usuário'})
@IsEmail({},{ message: 'O email deve ser um endereço de email válido'})
email: string;

@ApiProperty({example: 'Senha123', description: 'Senha do usuário'})
@IsString({message: "A senha precisa ser textual"})
@MinLength(6,{message: 'A senha deve ter pelo menos 6 caracteres'})
password: string;
}