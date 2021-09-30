import express from 'express';
import { AdminController } from '../controller/Admin.controller';
import { IADMIN } from '../types/document/IAdmin';
import { ISaveRequestAdmin } from '../types/Request/Admin.Request';
import { ISaveAdminResponse } from '../types/Response/Admin.Response';

import CustomeError from '../utills/error';

export class AdminRoutes {
  router: express.Router;
  constructor() {
    this.router = express.Router();
    this.routes();
  }

  //get admin
  routes() {
    this.router.post('/saveAdmin', async (req, res, next) => {
      try {
        const getreq:ISaveRequestAdmin = req.body;
          const admin:ISaveAdminResponse = await new AdminController().SaveAdmin(getreq);
          res.send(admin);
      } catch (error) {
        next(error);
      }
    });
    
  }
}
export const AdminRoutesApi = new AdminRoutes().router;