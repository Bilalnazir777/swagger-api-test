import { IGROUP } from '../types/document/IGROUP';
import { MainGroup } from '../repositries/Group.repositries';
import CustomeError from '../utills/error';
import { Get, Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse,Security } from "tsoa";
import {IAddUserToGroupResponse, IcheckmesagesRes, ICreateGroupResponse, IUpdateGroupMessagesResponse, } from '../types/Response/Group.Response';
import {  ICreateGroupRequest, IAddUserToGroupRequest, IDeleteGroupRequest, IGetGroupRequest, IcheckmesagesReq } from '../types/Request/Group.Request';
import { group } from 'console';




@Route('group')
@Tags('group')
@Security('api_key')
export class GroupController{
    constructor() {  }

    @Post("/getgroup")
  async getgroup(@Body() getreq:IGetGroupRequest): Promise<IUpdateGroupMessagesResponse> {
    const group: any = <any> await new MainGroup().getgroup(getreq._id);
    if (group === null) throw new CustomeError(404, 'Admin not found');
    return group;
  }
    @Post('/creategroup')
    async Creategroup(@Body() group:ICreateGroupRequest) : Promise <ICreateGroupResponse>{
    const created_group:any = await new MainGroup().creategroup(<IGROUP>(group))
    return <ICreateGroupResponse>created_group
    }
    @Delete('/deletegroup')
    @SuccessResponse("200","group deleted")
    async DeleteGroup(@Body() delreq: IDeleteGroupRequest) {
      return await new MainGroup().deletegroup(delreq._id);
    }
    @Post('/addusertogroup')
    async AddUserToGroup(@Body() user:IAddUserToGroupRequest) : Promise <IAddUserToGroupResponse>{
    const new_user:IGROUP = await new MainGroup().addusertogroup(<any>(user))
    return <IAddUserToGroupResponse>new_user
    }
    @Post('/checkingmesage')
    async checkingmessage(@Body() group:IcheckmesagesReq):Promise<IcheckmesagesRes>{
      const message:any = await new MainGroup().checkingmessage(group)
      let salary:any = message.message
      let msj:string[] = []
      for(let n in salary){
         if(salary[n].msj===message.message){
           msj.push(salary[n])
         }
      }
      return <any>(msj)
    }


}