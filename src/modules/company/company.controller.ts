import {
    Controller,
    Get,
    Param,
    Post, Res, UploadedFile,
    UseInterceptors,
} from '@nestjs/common';

import { CompanyService } from './company.service';
import {Crud, CrudController} from "@nestjsx/crud";
import {CompanyUserDto} from "./models/dto/request/company-user.dto";
import {FileInterceptor} from "@nestjs/platform-express";
import {diskStorage} from "multer";
import path = require('path');
import { v4 as uuidv4 } from 'uuid';
import {Observable, of} from "rxjs";
import {join} from "path";
import {NewsFeed} from "../newsfeed/models/entities/models.entity";

export const imagePrefix = 'newsFeedImage';

export const storage = {
    storage: diskStorage({
        destination: './uploads/newsfeed-images',
        filename: (req, file, cb) => {
            const filename: string = imagePrefix + uuidv4();
            const extension: string = path.parse(file.originalname).ext;
            cb(null, `${filename}${extension}`)
        }
    })
}

@Crud({
    model: {
        type: NewsFeed,
    },
    dto:{
        create:CompanyUserDto
    },
    query:{
        alwaysPaginate:true
    }
})
@Controller('newsfeeds')
export class CompanyController implements CrudController<NewsFeed> {

    constructor(public service: CompanyService) {
    }

    @Post('upload')
    @UseInterceptors(FileInterceptor('file', storage))
    uploadSingle(@UploadedFile() file) {
        console.log('File data : ',file);
        return {
            filename:file.filename.split(imagePrefix)[1]
        }
    }

    @Get('image/:imageName')
    findImage(@Param('imageName') imageName, @Res() res): Observable<Object> {
        return of(res.sendFile(join(process.cwd(), `uploads/newsfeed-images/` + imagePrefix + imageName)));
    }

}


