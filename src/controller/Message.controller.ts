import { MainMessage } from '../repositries/Message.repositries';
import { Get, Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse, Security } from "tsoa";
import { IcheckmesagesReq } from '../types/Request/Group.Request';
import { checker } from '../modules/check.messages';
import { Iuserallmessagesreq } from '../types/Request/Message.Request';
import { userallmessages } from '../modules/userallmessages';


@Route('message')
@Tags('messages')
@Security('api_key')

export class MessageController {
    constructor() { }
    @Post('/checkmessages')
    async checkmessage(@Body() message: IcheckmesagesReq): Promise<any> {
        const messagearray = await new MainMessage().checkingmessages();
        const filtered_messages = checker(message.messagebody, messagearray);
        return filtered_messages
    }
    @Post('/userallmessages')
    async userallmessages(@Body() user:Iuserallmessagesreq): Promise <any> {
       const usermessage = await new MainMessage().userallmessages()
       const user_all_messages = userallmessages(user.messagebody,user.userid, usermessage)
       return user_all_messages

    }
}
