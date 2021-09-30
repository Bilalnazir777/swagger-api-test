import { Document } from "mongoose";
export interface IMESSAGE extends Document {
    _id: string;
    group:string|any
    message: IGroupMessages[]
    createdat?: string;
    updatedat?: string;

}
export interface IGroupMessages{
    user:string
    message:string
}