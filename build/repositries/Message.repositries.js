"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainMessage = void 0;
const Message_model_1 = require("../model/Message.model");
class MainMessage {
    constructor() { }
    sendmessage(message) {
        return Message_model_1.MESSAGESchema.findOneAndUpdate({ group: message.groupid }, {
            '$push': {
                'messagearray': { messagebody: message.messagebody, userid: message.userid },
            },
        }, {
            new: true,
            upsert: true,
        });
    }
    checkingmessages() {
        return Message_model_1.MESSAGESchema.find();
    }
    userallmessages() {
        return Message_model_1.MESSAGESchema.find();
    }
}
exports.MainMessage = MainMessage;
