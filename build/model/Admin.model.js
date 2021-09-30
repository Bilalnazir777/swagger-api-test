"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ADMINSchema = void 0;
const mongoose_1 = require("mongoose");
const IADMINSchema = new mongoose_1.Schema({
    firstname: { type: String },
    lastname: { type: String },
    password: { type: String }
}, { timestamps: true });
exports.ADMINSchema = (0, mongoose_1.model)('IADMINSchema', IADMINSchema);
