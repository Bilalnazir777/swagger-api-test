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
exports.UserRoutesApi = exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const User_controller_1 = require("../controller/User.controller");
class UserRoutes {
    constructor() {
        this.router = express_1.default.Router();
        this.routes();
    }
    routes() {
        //admin will register user
        this.router.post('/registeruser', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = req.body;
                const newuser = yield new User_controller_1.UserController().RegisterUser(user);
                res.status(200).json({
                    message: newuser
                });
            }
            catch (error) {
                next(error);
            }
        }));
        //admin will delete user
        this.router.delete('/deleteuser', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const delreq = req.body;
                const Deleted_admin = yield new User_controller_1.UserController().DeleteUser(delreq);
                res.status(200).json({
                    message: 'user deleted'
                });
            }
            catch (error) {
                next(error);
            }
        }));
        //user can manage his profile
        this.router.put('/manageuser', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = req.body;
                const upadated_user = yield new User_controller_1.UserController().ManageUser(user);
                const response = {
                    upadated_user,
                };
                res.status(200).json({
                    message: response
                });
            }
            catch (error) {
                next(error);
            }
        }));
        //user can send messages
        this.router.post('/sendMessage', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const message = req.body;
            const messages = yield new User_controller_1.UserController().sendMessage(message);
            if (messages) {
                res.status(200).send(messages);
            }
            else {
                res.status(400).send({
                    status: 'not sent',
                });
            }
        }));
    }
}
exports.UserRoutes = UserRoutes;
exports.UserRoutesApi = new UserRoutes().router;
