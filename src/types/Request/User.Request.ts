import { IUserGroups } from "../document/IUSER";

export interface IRegisterUserRequest {
	user_name: string;
	email: string;
    password:string;
    pictureUrl:string
}
export interface IUserManageRequest{
    _id:string
    user_name:string
    email:string
    password:string
    pictureUrl:string
    groups:IUserGroups[]
}
export interface IDeleteUserRequest{
    _id:string
}
export interface IUserSendMessageRequest {
	Group: string;
	messagebody: string;
}
