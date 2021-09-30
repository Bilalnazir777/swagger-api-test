"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainApi = exports.MainRouter = void 0;
const express_1 = __importDefault(require("express"));
const Login_route_1 = require("./Login.route");
const UserAuth_1 = require("../middleware/UserAuth");
const Admin_route_1 = require("./Admin.route");
const user_route_1 = require("./user.route");
const Group_route_1 = require("./Group.route");
class MainRouter {
    constructor() {
        this.router = express_1.default.Router();
        this.routes();
    }
    routes() {
        this.router.use('/admin', UserAuth_1.TokenVarifier, Admin_route_1.AdminRoutesApi);
        this.router.use('/user', UserAuth_1.TokenVarifier, user_route_1.UserRoutesApi);
        this.router.use('/group', UserAuth_1.TokenVarifier, Group_route_1.GroupRoutesApi);
        this.router.use('/', Login_route_1.loginrouteapi);
    }
}
exports.MainRouter = MainRouter;
exports.MainApi = new MainRouter().router;
