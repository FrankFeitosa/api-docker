import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterUserDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private prismaService: PrismaService
    ) { }
    async validateUser(email: string, password: string) {
        const user = await this.prismaService.user.findUnique({ where: { email } });
        if (!user) throw new UnauthorizedException('Credenciais Inválidas');

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw new UnauthorizedException('Credenciais Inválidas');

        return user;
    }

    async login(dto: LoginDto) {
        const user = await this.validateUser(dto.email, dto.password);
        const payload = { email: user.email, sub: user.id, role: user.role };
        return  {
            access_token: this.jwtService.sign(payload),
        };
    }

    async registerUser(userData: RegisterUserDto) {

        const userExists = await this.prismaService.user.findUnique({
            where: { email: userData.email }
        });
        if (userExists) {
            throw new ConflictException('Usuário já cadastrado com este email');
        }
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        const newUser = await this.prismaService.user.create({
            data: {
                name: userData.name,
                email: userData.email,
                password: hashedPassword
            },
            select: {
                id: true,
                name: true,
                email: true,
                role: true
            }
        });
        return newUser
    }
}
