import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./users.service";
@Controller('user')
export class UsersControllers{

    private userService: UserService
    constructor(userService: UserService) { 
        this.userService = userService
    }
    @Get()
    findAll(){ 
    return this.userService.findAll()
    }

    @Get(':id')
    findOneUser(@Param('id') id: string){
        return this.userService.findOne(parseInt(id))
    }

    @Post()
    createUser(@Body() user: {name:string, email:string}){
        return this.userService.create(user)
    }
    @Put(':id')
    updateUp(@Param(':id') id: string, 
    @Body() user: {name: string, email:string}){
        return this.userService.update(Number(id),user)
    }

}