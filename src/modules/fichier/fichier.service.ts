import { Body, ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FichierDto } from './models/dto/request/fichier.dto';
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import {Fichier} from "./models/entities/fichier.entity";
import {join} from "path";
import {filePrefix} from "./fichier.controller";
const { promisify } = require('util')
const fs = require('fs')

const unlinkAsync = promisify(fs.unlink)

@Injectable()
export class FichierService extends TypeOrmCrudService<Fichier>{

    constructor(
        @InjectRepository(Fichier) private fichierRepository:Repository<Fichier>,
        @InjectRepository(Fichier) repo) {
        super(repo);
    }

    /* create new fichier */
    async createFichier(@Body() createUserDto:FichierDto): Promise<Fichier> {
        const fichier = await this.fichierRepository.create(createUserDto);
        try {
            await fichier.save();
        } catch (err) {
            console.log('Error ": ',err)
            throw new InternalServerErrorException();
        }
        return fichier;
    }

    async findUserByFileName(fileName: string) {
        return await Fichier.findOne({
            where: {
                fileName: fileName,
            },
        });
    }

    async deleteFile(id) {

        const file = await this.fichierRepository.findOne(id);
        const filePath = join(process.cwd(), `uploads/files/` + filePrefix + file.fileName);

        if(fs.existsSync(filePath)) {
            await unlinkAsync(filePath);
        }

        if(!fs.existsSync(filePath)) {
            return await this.fichierRepository.delete(id);
        }
    }
}
