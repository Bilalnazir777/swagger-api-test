import { MESSAGESchema } from '../model/Message.model';
import { IMESSAGE } from '../types/document/IMESSAGE';
import { ISendMessageRequest } from '../types/Request/Message.Request'

export class MainMessage {
	constructor() { }

	sendmessage(message: ISendMessageRequest) {
		return MESSAGESchema.findOneAndUpdate(
			{ group: message.groupid },
			{
				'$push': {
					'message': { message: message.message, userid: message.userid },
				},
			},
			{
				new: true,
				upsert: true,
			}
		);
	}
	checkingmessages(){
		return MESSAGESchema.find()
	}
}