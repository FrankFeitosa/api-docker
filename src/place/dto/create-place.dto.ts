import { IsEnum, IsNotEmpty, IsNumber, IsString, IsArray, ArrayMaxSize, IsUrl, ArrayNotEmpty } from "class-validator";
import { placeType } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

export class CreatePlaceDto {
    @ApiProperty({ example: 'Praia de Icarai'})
    @IsString()
    @IsNotEmpty()
    name:string;

    @ApiProperty({enum: placeType, example: 'Restaurante'})
    @IsEnum(placeType)
    type: placeType;

    @ApiProperty(  { example: '(99) 99999-8888' })
    @IsString()
    phone: string;

    @ApiProperty({ example: '-3.7327' })
    @IsNumber()
    latitude: number;

    @ApiProperty({ example: '-38.4959' })
    @IsNumber()
    longitude: number;

}