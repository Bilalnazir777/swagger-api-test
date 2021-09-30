import {IGroupMembers} from '../document/IGROUP'
export interface ICreateGroupResponse {
	_id: string;
	name: string;
	members: IGroupMembers[];
}
export interface IAddUserToGroupResponse {
	members: IGroupMembers[];
}
export interface IGetGroupResponse {}
export interface IUpdateGroupMessagesResponse {
	_id: string;
	name: string;
	members: IGroupMembers[];
	message: string;
}
export interface IcheckmesagesRes{
    groupid:string
    message:string
}