"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MESSAGESchema = void 0;
const mongoose_1 = require("mongoose");
const IMESSAGESchema = new mongoose_1.Schema({
    group: { type: mongoose_1.Schema.Types.ObjectId, ref: 'IGROUPSchema' },
    message: [{
            userid: { type: mongoose_1.Schema.Types.ObjectId, ref: 'IUSERSchema' },
            message: String
        }]
}, { timestamps: true });
exports.MESSAGESchema = (0, mongoose_1.model)('IMESSAGESchema', IMESSAGESchema);
