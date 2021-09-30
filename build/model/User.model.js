"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USERSchema = void 0;
const mongoose_1 = require("mongoose");
const IUSERSchema = new mongoose_1.Schema({
    user_name: { type: String },
    email: { type: String },
    password: { type: String },
    pictureUrl: { type: String },
    groups: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'IGROUPSchema' }]
}, { timestamps: true });
exports.USERSchema = (0, mongoose_1.model)('IUSERSchema', IUSERSchema);
