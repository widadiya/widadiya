import {IsDate, IsEmail, IsNotEmpty} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import {Column} from "typeorm";

export class FichierDto {

    @ApiProperty()
    fileName: string;

    @ApiProperty()
    label: string;

    @ApiProperty()
    category: string;

    @Column()
    size: string;

    @Column()
    mimetype: string;

    @ApiProperty()
    groupRef: string;

}
