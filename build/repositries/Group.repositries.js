"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainGroup = void 0;
const Group_model_1 = require("../model/Group.model");
class MainGroup {
    constructor() { }
    getgroup(_id) {
        return Group_model_1.GROUPSchema.findById(_id).populate('messages', 'members');
    }
    creategroup(group) {
        return new Group_model_1.GROUPSchema(group).save();
    }
    deletegroup(_id) {
        return Group_model_1.GROUPSchema.findByIdAndDelete(_id);
    }
    addusertogroup(group) {
        console.log(group);
        return Group_model_1.GROUPSchema.findByIdAndUpdate(group.groupid, {
            '$push': { members: { _id: group.userid } },
        }, {
            new: true
        });
    }
    updategroupmessages(group) {
        return Group_model_1.GROUPSchema.findByIdAndUpdate(group.groupid, { message: group.messageid }, {
            new: true,
        }).populate('message');
    }
    checkingmessage(group) {
        return Group_model_1.GROUPSchema.findById(group.groupid);
    }
}
exports.MainGroup = MainGroup;
