"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainApi = exports.MainRouter = void 0;
const express_1 = __importDefault(require("express"));
const login_route_1 = require("./login.route");
const userauth_1 = require("../middleware/userauth");
const User_route_1 = require("./User.route");
const Group_route_1 = require("./Group.route");
const message_route_1 = require("./message.route");
class MainRouter {
    constructor() {
        this.router = express_1.default.Router();
        this.routes();
    }
    routes() {
        this.router.use('/user', userauth_1.TokenVarifier, User_route_1.UserRoutesApi);
        this.router.use('/group', userauth_1.TokenVarifier, Group_route_1.GroupRoutesApi);
        this.router.use('/message', userauth_1.TokenVarifier, message_route_1.MessageRoutesApi);
        this.router.use('/', login_route_1.loginrouteapi);
    }
}
exports.MainRouter = MainRouter;
exports.MainApi = new MainRouter().router;
