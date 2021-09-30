import { Document } from "mongoose";
export interface IADMIN extends Document {
    _id: string;
    firstname: string;
    lastname?: string;
    password:string
    createdat?: string;
    updatedat?: string;

}