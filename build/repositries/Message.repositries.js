"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainMessage = void 0;
const Message_model_1 = require("../model/Message.model");
class MainMessage {
    constructor() { }
    sendmessage(message) {
        return Message_model_1.MESSAGESchema.findOneAndUpdate({ group: message.groupid }, {
            '$push': {
                'message': { message: message.message, userid: message.userid },
            },
        }, {
            new: true,
            upsert: true,
        });
    }
}
exports.MainMessage = MainMessage;
