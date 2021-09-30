"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainUser = void 0;
const User_model_1 = require("../model/User.model");
class MainUser {
    constructor() { }
    manageuser(user) {
        return User_model_1.USERSchema.findByIdAndUpdate(user._id, user, {
            new: true
        });
    }
    registeruser(user) {
        return new User_model_1.USERSchema(user).save();
    }
    deleteuser(_id) {
        return User_model_1.USERSchema.findByIdAndDelete(_id);
    }
    ReturnUser(user) {
        return User_model_1.USERSchema.findOne({ user_name: user.user_name, password: user.password });
    }
}
exports.MainUser = MainUser;
