"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainAdmin = void 0;
const Admin_model_1 = require("../model/Admin.model");
class MainAdmin {
    constructor() { }
    //saving admin 
    saveadmin(admin) {
        return new Admin_model_1.ADMINSchema(admin).save();
    }
}
exports.MainAdmin = MainAdmin;
