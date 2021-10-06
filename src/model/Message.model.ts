import { Schema, model } from 'mongoose';
import { IMESSAGE } from '../types/document/IMESSAGE';

const IMESSAGESchema = new Schema(
    {
        group: { type:Schema.Types.ObjectId , ref:'IGROUPSchema' },
        messagearray:[{
            userid:{type:Schema.Types.ObjectId , ref:'IUSERSchema'},
            messagebody:String
    }]

    },
    { timestamps: true }
);
export const MESSAGESchema = model<IMESSAGE>('IMESSAGESchema', IMESSAGESchema);