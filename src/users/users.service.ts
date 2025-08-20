import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { User, Prisma } from '@prisma/client'
@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) { }
    
    async create(data: Prisma.UserCreateInput): Promise<User> {
        return this.prisma.user.create({ data })
    }

    async findAll():Promise<User[]>{
        return this.prisma.user.findMany()
    }

    async findOne(id:string):Promise<User | null>{
        const founduser = await this.prisma.user.findUnique({
            where: {id}
        });
        if(!founduser){
            throw new NotFoundException(`Usuário com o ID ${id} não encontrado!`)
        }
        return founduser
    }

    async update (id:string, data: Prisma.UserUpdateInput):Promise<User | null>{
        const updateUser = await this.prisma.user.update({
            where: {id}, data})
        if(!updateUser){
            throw new NotFoundException(`
                Usuário com o ID ${id} não encontrado`)
        }
        return updateUser
    }

    async remove(id:string):Promise<User | null>{
        const deleteUser = await this.prisma.user.delete({
            where: {id}
        })
        if(!deleteUser){
            throw new NotFoundException(`
                Usuário com o ID ${id} não encontrado!`)
        }
        return deleteUser
    }

}
