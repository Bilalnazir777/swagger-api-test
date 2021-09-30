import { Schema, model } from 'mongoose';
import { IGROUP } from '../types/document/IGROUP';

const IGROUPSchema = new Schema(
    {
        group: { type: String },
        members:[{ type:Schema.Types.ObjectId , ref:'IUSERSchema'}],
        messages:{type:Schema.Types.ObjectId , ref:'IMESSAGESchema'}

    },
    { timestamps: true }
);
export const GROUPSchema = model<IGROUP>('IGROUPSchema', IGROUPSchema);