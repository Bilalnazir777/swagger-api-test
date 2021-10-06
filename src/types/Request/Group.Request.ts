import { IGroupMembers } from "../document/IGROUP";


export interface ICreateGroupRequest{ 
    group:string
    members:IGroupMembers[]
}
export interface IAddUserToGroupRequest{
    userid:string
    groupid:string
}
export interface IDeleteGroupRequest{
    _id:string     
}

export interface IGetGroupRequest{
    _id:string
}
export interface IUpdateGroupMessagesRequest {
	groupid: string;
	messageid: string;
}
export interface IcheckmesagesReq{
  
    messagebody:string
}