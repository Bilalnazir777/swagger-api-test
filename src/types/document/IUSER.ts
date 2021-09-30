import { Document } from "mongoose";
export interface IUSER extends Document {
    _id: string;
    user_name:string
    email:string
    password:string
    pictureUrl:string
    groups:IUserGroups[]
    createdat?: string;
    updatedat?: string;

}
export interface IUserGroups{
    _id:string
}