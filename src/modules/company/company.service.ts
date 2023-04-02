import { Body, ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


// import { User } from './models/entities/models.entity';
import { CompanyUserDto } from './models/dto/request/company-user.dto';
import { UserErrors } from '../../shared/errors/user/user.errors';
import { CommonErrors } from 'src/shared/errors/common/common.errors';
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import {NewsFeed} from "../newsfeed/models/entities/models.entity";

@Injectable()
export class CompanyService extends TypeOrmCrudService<NewsFeed>{

    constructor(
        @InjectRepository(NewsFeed) repo) {
        super(repo);
    }

    // async getImages(): Promise<Image[]> {
    //     return this.imageRepository.find();
    // }
    //
    // async createImage(image: Image): Promise<Image> {
    //     return this.imageRepository.save(image);
    // }
    //
    // async getImage(id: number): Promise<Image> {
    //     return this.imageRepository.findOne({ id });
    // }
    //
    // async deleteImage(id: number): Promise<void> {
    //     await this.imageRepository.delete(id);
    // }

    
}
