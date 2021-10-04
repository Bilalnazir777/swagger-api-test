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
exports.AdminRoutesApi = exports.AdminRoutes = void 0;
const express_1 = __importDefault(require("express"));
const Admin_controller_1 = require("../controller/Admin.controller");
class AdminRoutes {
    constructor() {
        this.router = express_1.default.Router();
        this.routes();
    }
    //get admin
    routes() {
        this.router.post('/authAdmin', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const getreq = req.body;
                const admin = yield new Admin_controller_1.AdminController().SaveAdmin(getreq);
                res.send(admin);
            }
            catch (error) {
                next(error);
            }
        }));
    }
}
exports.AdminRoutes = AdminRoutes;
exports.AdminRoutesApi = new AdminRoutes().router;
