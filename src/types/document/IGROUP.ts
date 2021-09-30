import { Document } from "mongoose";
export interface IGROUP extends Document {
    _id: string;
    group:string
    members:string|any
    messages:IGroupMembers[]
    createdat?: string;
    updatedat?: string;

}

export interface IGroupMembers{
    _id:string
}
