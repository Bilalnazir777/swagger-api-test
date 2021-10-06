import { Document } from "mongoose";
export interface IMESSAGE extends Document {
    _id: string;
    group:string|any
    messagearray: IGroupMessages[]
    createdat?: string;
    updatedat?: string;

}
export interface IGroupMessages{
    user:string
    messagebody:string
}