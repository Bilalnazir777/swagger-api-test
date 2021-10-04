"use strict";
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
exports.GroupRoutesApi = exports.GroupRoutes = void 0;
const express_1 = __importDefault(require("express"));
const Group_controller_1 = require("../controller/Group.controller");
class GroupRoutes {
    constructor() {
        this.router = express_1.default.Router();
        this.routes();
    }
    routes() {
        //getting group by id
        this.router.post('/getgroup', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const getreq = req.body;
                const group = yield new Group_controller_1.GroupController().getgroup(getreq);
                res.send(group);
            }
            catch (error) {
                next(error);
            }
        }));
        //creating new group
        this.router.post('/creategroup', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const getreq = req.body;
                const newgroup = yield new Group_controller_1.GroupController().Creategroup(getreq);
                res.send(newgroup);
            }
            catch (error) {
                next(error);
            }
        }));
        //deleteing group by id
        this.router.delete('/deletegroup', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const delreq = req.body;
                const Deleted_group = yield new Group_controller_1.GroupController().DeleteGroup(delreq);
                res.status(200).json({
                    message: 'group deleted'
                });
            }
            catch (error) {
                next(error);
            }
        }));
        //adding new user to existing group 
        this.router.post('/addusertogroup', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const getreq = req.body;
                const useradded = yield new Group_controller_1.GroupController().AddUserToGroup(getreq);
                res.send(useradded);
            }
            catch (error) {
                next(error);
            }
        }));
    }
}
exports.GroupRoutes = GroupRoutes;
exports.GroupRoutesApi = new GroupRoutes().router;
