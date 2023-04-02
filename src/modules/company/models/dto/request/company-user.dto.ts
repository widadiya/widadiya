import {IsDate, IsEmail, IsNotEmpty} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import {Optional} from "@nestjs/common";

export class CompanyUserDto {
    @ApiProperty()
    @IsNotEmpty()
    title: string;

    @ApiProperty()
    @IsNotEmpty()
    content: string;

    @ApiProperty()
    date: Date;

    @ApiProperty()
    @Optional()
    imagePath: string;
}
