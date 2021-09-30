"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const User_repositries_1 = require("../repositries/User.repositries");
const error_1 = __importDefault(require("../utills/error"));
const tsoa_1 = require("tsoa");
const Message_repositries_1 = require("../repositries/Message.repositries");
let UserController = class UserController {
    constructor() { }
    RegisterUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const save_user = yield new User_repositries_1.MainUser().registeruser((user));
            return save_user;
        });
    }
    DeleteUser(delreq) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield new User_repositries_1.MainUser().deleteuser(delreq._id);
        });
    }
    ManageUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const update_user = yield new User_repositries_1.MainUser().manageuser((user));
            if (update_user === null)
                throw new error_1.default(400, 'Admin not updated');
            return update_user;
        });
    }
    sendMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            const messages = (yield new Message_repositries_1.MainMessage().sendmessage(message));
            console.log(messages, message);
            return messages;
        });
    }
};
__decorate([
    (0, tsoa_1.Post)('/registeruser'),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "RegisterUser", null);
__decorate([
    (0, tsoa_1.Delete)('/deleteuser'),
    (0, tsoa_1.SuccessResponse)("200", "user deleted"),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "DeleteUser", null);
__decorate([
    (0, tsoa_1.Put)('/manageuser'),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "ManageUser", null);
__decorate([
    (0, tsoa_1.Post)('/sendMessage'),
    (0, tsoa_1.Tags)('messages'),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "sendMessage", null);
UserController = __decorate([
    (0, tsoa_1.Route)('user'),
    (0, tsoa_1.Tags)('user'),
    (0, tsoa_1.Security)('api_key'),
    __metadata("design:paramtypes", [])
], UserController);
exports.UserController = UserController;
