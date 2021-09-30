import express from 'express';

import { loginrouteapi } from './login.route';
import { TokenVarifier } from '../middleware/userauth';
import { AdminRoutesApi } from './Admin.route';
import { UserRoutesApi } from './User.route';
import { GroupRoutesApi } from './Group.route';


export class MainRouter {
    router: express.Router;
    constructor() {
        this.router = express.Router();
        this.routes();
    }
    routes() {
       
        this.router.use('/admin',TokenVarifier,AdminRoutesApi)
        this.router.use('/user',TokenVarifier,UserRoutesApi)
        this.router.use('/group',TokenVarifier,GroupRoutesApi)
        this.router.use('/', loginrouteapi)
    }
}
export const MainApi = new MainRouter().router