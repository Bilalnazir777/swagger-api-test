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
exports.GroupController = void 0;
const Group_repositries_1 = require("../repositries/Group.repositries");
const error_1 = __importDefault(require("../utills/error"));
const tsoa_1 = require("tsoa");
let GroupController = class GroupController {
    constructor() { }
    getgroup(getreq) {
        return __awaiter(this, void 0, void 0, function* () {
            const group = yield new Group_repositries_1.MainGroup().getgroup(getreq._id);
            if (group === null)
                throw new error_1.default(404, 'Admin not found');
            return group;
        });
    }
    Creategroup(group) {
        return __awaiter(this, void 0, void 0, function* () {
            const created_group = yield new Group_repositries_1.MainGroup().creategroup((group));
            return created_group;
        });
    }
    DeleteGroup(delreq) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield new Group_repositries_1.MainGroup().deletegroup(delreq._id);
        });
    }
    AddUserToGroup(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const new_user = yield new Group_repositries_1.MainGroup().addusertogroup((user));
            return new_user;
        });
    }
    checkingmessage(group) {
        return __awaiter(this, void 0, void 0, function* () {
            const message = yield new Group_repositries_1.MainGroup().checkingmessage(group);
            let salary = message.message;
            let msj = [];
            for (let n in salary) {
                if (salary[n].msj === message.message) {
                    msj.push(salary[n]);
                }
            }
            return (msj);
        });
    }
};
__decorate([
    (0, tsoa_1.Post)("/getgroup"),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "getgroup", null);
__decorate([
    (0, tsoa_1.Post)('/creategroup'),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "Creategroup", null);
__decorate([
    (0, tsoa_1.Delete)('/deletegroup'),
    (0, tsoa_1.SuccessResponse)("200", "group deleted"),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "DeleteGroup", null);
__decorate([
    (0, tsoa_1.Post)('/addusertogroup'),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "AddUserToGroup", null);
__decorate([
    (0, tsoa_1.Post)('/checkingmesage'),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "checkingmessage", null);
GroupController = __decorate([
    (0, tsoa_1.Route)('group'),
    (0, tsoa_1.Tags)('group'),
    (0, tsoa_1.Security)('api_key'),
    __metadata("design:paramtypes", [])
], GroupController);
exports.GroupController = GroupController;
