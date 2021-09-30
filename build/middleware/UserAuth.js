"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenVarifier = void 0;
const jwt = __importStar(require("jsonwebtoken"));
const error_1 = __importDefault(require("../utills/error"));
//middleware that will verify token
var TokenVarifier = (req, res, next) => {
    var token = req.header('token');
    if (!token) {
        let err = new error_1.default(403, "token required fof login");
        console.log('no token');
        next(err);
    }
    else {
        try {
            const decoded = jwt.verify(token, process.env.TOKEN_KEY);
            req.body.username = decoded;
            next();
        }
        catch (err) {
            err = new error_1.default(403, "invalid token key");
            next(err);
        }
    }
};
exports.TokenVarifier = TokenVarifier;
