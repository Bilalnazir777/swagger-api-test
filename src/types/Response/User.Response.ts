import { IUserGroups } from "../document/IUSER";

export interface IUserManageResponse{
    _id:string
    user_name:string
    email:string
    password:string
    pictureUrl:string
    groups:IUserGroups[]
}
export interface IRegisterUserResponse {
	user_name: string;
	email: string;
    password:string;
    pictureUrl:string
}
export interface IDeleteUserResponse{
    _id:string
}