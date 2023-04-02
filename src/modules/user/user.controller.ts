import { ClassSerializerInterceptor, Controller, Get, NotAcceptableException, Param, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';

import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import { User } from './models/entities/user.entity';
import {Crud, CrudController} from "@nestjsx/crud";
import {Fichier} from "../fichier/models/entities/fichier.entity";
import {FichierDto} from "../fichier/models/dto/request/fichier.dto";
import {CreateUserDto} from "./models/dto/request/create-user.dto";

@Crud({
    model: {
        type: User,
    },
    dto:{
        create:CreateUserDto
    },
    query:{
        alwaysPaginate:true
    }
})

@UseInterceptors(ClassSerializerInterceptor)
@Controller('user')
export class UserController implements CrudController<User> {

    constructor(public service:UserService) { }

    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles('ROLE_ADMIN')
    // @Get()
    // async getAllUsers() {
    //     return await this.service.getAllUsers();
    // }
    
    @Get('/:id')
    async findByEmail(@Param('id') id: number): Promise<User>{
       return await this.service.findUserById(id);
    }

}


