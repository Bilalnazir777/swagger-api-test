"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GROUPSchema = void 0;
const mongoose_1 = require("mongoose");
const IGROUPSchema = new mongoose_1.Schema({
    group: { type: String },
    members: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'IUSERSchema' }],
    messages: { type: mongoose_1.Schema.Types.ObjectId, ref: 'IMESSAGESchema' }
}, { timestamps: true });
exports.GROUPSchema = (0, mongoose_1.model)('IGROUPSchema', IGROUPSchema);
