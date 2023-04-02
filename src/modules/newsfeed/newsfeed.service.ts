import { Body, ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


// import { User } from './models/entities/models.entity';
import { NewsfeedUserDto } from './models/dto/request/newsfeed-user.dto';
import { UserErrors } from '../../shared/errors/user/user.errors';
import { CommonErrors } from 'src/shared/errors/common/common.errors';
import {NewsFeed} from "./models/entities/models.entity";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import {Image} from "./models/entities/image.entity";

@Injectable()
export class NewsfeedService extends TypeOrmCrudService<NewsFeed>{

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
