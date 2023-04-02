import {
    Body,
    Controller, Delete,
    Get,
    Param,
    Post, Res, UploadedFile,
    UseInterceptors,
} from '@nestjs/common';

import { FichierService } from './fichier.service';

import {Crud, CrudController} from "@nestjsx/crud";
import {FichierDto} from "./models/dto/request/fichier.dto";
import {diskStorage} from "multer";
import path = require('path');
import { v4 as uuidv4 } from 'uuid';
import {Observable, of} from "rxjs";
import {join} from "path";
import {Fichier} from "./models/entities/fichier.entity";
import {FileInterceptor} from "@nestjs/platform-express";
import {NewsFeed} from "../newsfeed/models/entities/models.entity";


export const filePrefix = 'file#';
export const storage = {
    storage: diskStorage({
        destination: './uploads/files',
        filename: (req, file, cb) => {
            const filename: string = filePrefix + uuidv4();
            const extension: string = path.parse(file.originalname).ext;
            cb(null, `${filename}${extension}`)
        }
    })

}

@Crud({
    model: {
        type: Fichier,
    },
    dto:{
        create:FichierDto
    },
    query:{
        alwaysPaginate:true
    }
})
@Controller('fichier')
export class FichierController implements CrudController<Fichier> {

    constructor(public service: FichierService) {
    }

    @Post('upload')
    @UseInterceptors(FileInterceptor('file', storage))
    async uploadSingle(@Body() body,@UploadedFile() file ) {
        console.log('File data : ', file);
        console.log('File body : ', body);

        const filename = file.filename.split(filePrefix)[1]
        const createdFile = await this.service.createFichier({
            fileName: filename,
            label: body && body.label.length ? body.label : filename,
            category: body.category ? body.category : '',
            size: file.size,
            mimetype: file.mimetype,
            groupRef : body.groupRef
        })
        if(createdFile)
            return {filename}
    }

    @Get('file/:filename')
    findFile(@Param('filename') filename, @Res() res): Observable<Object> {
        return of(res.sendFile(join(process.cwd(), `uploads/files/` + filePrefix + filename)));
    }

    @Delete(':id')
    async deleteFile(@Param('id') id) {
        return this.service.deleteFile(id);
    }

}


