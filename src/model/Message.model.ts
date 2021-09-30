import { Schema, model } from 'mongoose';
import { IMESSAGE } from '../types/document/IMESSAGE';

const IMESSAGESchema = new Schema(
    {
        group: { type:Schema.Types.ObjectId , ref:'IGROUPSchema' },
        message:[{
            userid:{type:Schema.Types.ObjectId , ref:'IUSERSchema'},
            message:String
    }]

    },
    { timestamps: true }
);
export const MESSAGESchema = model<IMESSAGE>('IMESSAGESchema', IMESSAGESchema);