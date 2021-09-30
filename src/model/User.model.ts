import { Schema, model } from 'mongoose';
import { IUSER } from '../types/document/IUSER';

const IUSERSchema = new Schema(
    {
        user_name: { type: String },
        email: { type: String },
        password: { type: String },
        pictureUrl: { type: String },
        groups:[{ type:Schema.Types.ObjectId , ref:'IGROUPSchema'}]

    },
    { timestamps: true }
);
export const USERSchema = model<IUSER>('IUSERSchema', IUSERSchema);