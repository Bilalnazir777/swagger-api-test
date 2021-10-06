import { IADMIN } from '../types/document/IADMIN';
import { MainUser } from '../repositries/User.repositries';
import CustomeError from '../utills/error';
import { Get, Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse, Security } from "tsoa";
import { IRegisterUserResponse, IUserManageResponse, } from '../types/Response/User.Response';
import { IDeleteUserRequest, IRegisterUserRequest, IUserManageRequest } from '../types/Request/User.Request';
import { IUSER } from '../types/document/IUSER';
import { ISendMessageResponse } from '../types/Response/Message.Response';
import { MainMessage } from '../repositries/Message.repositries';
import { MainGroup } from '../repositries/Group.repositries';
import { ISendMessageRequest } from '../types/Request/Message.Request';
import { IUpdateGroupMessagesResponse } from '../types/Response/Group.Response';

@Route('user')
@Tags('user')
@Security('api_key')

export class UserController {
  constructor() { }
  @Post('/registeruser')
  async RegisterUser(@Body() user: IRegisterUserRequest): Promise<IRegisterUserResponse> {
    const save_user: IUSER = <any>await new MainUser().registeruser(<IUSER>(user))
    return <IRegisterUserResponse>save_user
  }
  @Delete('/deleteuser')
  @SuccessResponse("200", "user deleted")
  async DeleteUser(@Body() delreq: IDeleteUserRequest) {
    return await new MainUser().deleteuser(delreq._id);
  }
  @Put('/manageuser')
  async ManageUser(@Body() user: IUserManageRequest): Promise<IUserManageResponse> {
    const update_user: IUSER = await new MainUser().manageuser(<IUSER>(user));
    if (update_user === null)
      throw new CustomeError(400, 'Admin not updated');
    return <IUserManageResponse>update_user;
  }
  @Post('/sendMessage')
  async sendMessage(@Body() message: ISendMessageRequest
  ): Promise<ISendMessageResponse> {
    const messages: ISendMessageResponse = <any>(
      await new MainMessage().sendmessage(message)
    );
   
    return <ISendMessageResponse>messages
  }
}