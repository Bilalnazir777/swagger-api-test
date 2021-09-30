import { Schema, model } from 'mongoose';
import { IADMIN } from '../types/document/IADMIN';

const IADMINSchema = new Schema(
    {
      firstname: { type: String },
      lastname: { type: String },
      password: {type:String}
     
    },
    { timestamps: true }
  );
  export const ADMINSchema = model<IADMIN>('IADMINSchema', IADMINSchema);