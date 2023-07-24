import * as mongoose from 'mongoose';
import { IsString, Length } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ProductDto {
    @Field()
    @IsString({ message: 'Name must be a string' })
    @Length(3, 40, { message: 'Name must contain between 4 and 10 characters' })
    readonly name: string;

    @Field()
    @IsString({ message: 'Description must be a string' })
    @Length(3, 300, { message: 'Description must contain between 4 and 10 characters' })
    readonly description: string;

    readonly _id?: mongoose.Types.ObjectId;
}