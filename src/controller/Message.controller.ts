import { MainMessage } from '../repositries/Message.repositries';
import { Get, Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse, Security } from "tsoa";
import { IcheckmesagesReq } from '../types/Request/Group.Request';
import { checker } from '../modules/check.messages';


@Route('message')
@Tags('messages')
@Security('api_key')

export class MessageController {
    constructor() { }
    @Post('/checkmessages')
    async checkmessage(@Body() message: IcheckmesagesReq): Promise<any> {
        const messages = await new MainMessage().checkingmessages();
        const filtered_messages = checker(message.message, messages);
        return filtered_messages
    }
}
