import { Injectable } from "@nestjs/common";
import { start } from "repl";


@Injectable()
export class UserService {

    //banco de dados fake(array em memória)
    private users = [
        { id: 1, name: 'João', email: 'joao@mail.com' },
        { id: 2, name: 'Maria', email: 'maria@mail.com' }
    ]

    findAll(): { id: number, name: string, email: string }[] {
        return this.users
    }
    // consultar por id
    findOne(id: number): { id: number, name: string, email: string } | undefined {
        const foundUser = this.users.find(u => u.id === id)
        return foundUser
    }
    // criar novo usuario
    create(user: { name: string, email: string }):string {
        const newUser = {
            id: this.users.length + 1,
            name: user.name,
            email:user.email
        }
        this.users.push(newUser)
        return `Usuário ${newUser.name} criado com o ID ${newUser.id}`
    }
    update(id: number, user: {name?:string, email?:string}){
        
    }

}
