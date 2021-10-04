import express from 'express';
import { GroupController } from '../controller/Group.controller';
import { IGROUP } from '../types/document/IGROUP';
import { IUserManageResponse,} from '../types/Response/User.Response';
import { IUserManageRequest, } from '../types/Request/User.Request';
import CustomeError from '../utills/error';
import { IAddUserToGroupRequest, IcheckmesagesReq, ICreateGroupRequest,IDeleteGroupRequest } from '../types/Request/Group.Request';
import { IAddUserToGroupResponse, IcheckmesagesRes, ICreateGroupResponse } from '../types/Response/Group.Response';

export class GroupRoutes {
    router: express.Router;
    constructor() {
      this.router = express.Router();
      this.routes();
    }
    routes() {
    //getting group by id
        this.router.post('/getgroup', async (req, res, next) => {
            try {
              const getreq:IUserManageRequest = req.body;
                const group:IUserManageResponse = <any> await new GroupController().getgroup(<any>getreq);
                res.send(group);
            } catch (error) {
              next(error);
            }
          });
          //creating new group
          this.router.post('/creategroup', async (req, res, next) => {
            try {
                const getreq:ICreateGroupRequest = req.body;
                  const newgroup:ICreateGroupResponse = await new GroupController().Creategroup(getreq);
                  res.send(newgroup);
              } catch (error) {
                next(error);
              }
        });
        //deleteing group by id
        this.router.delete('/deletegroup', async (req, res, next) => {
            try {
                const delreq:IDeleteGroupRequest = req.body;
                const Deleted_group = await new GroupController().DeleteGroup(delreq);
                res.status(200).json({
                  message: 'group deleted'
                });
              } catch (error) {
                next(error);
              }
        });
        //adding new user to existing group 
        this.router.post('/addusertogroup', async (req, res, next) => {
            
                try {
                    const getreq:IAddUserToGroupRequest = req.body;
                      const useradded:IAddUserToGroupResponse = await new GroupController().AddUserToGroup(getreq);
                      res.send(useradded);
                  } catch (error) {
                    next(error);
                  }
          });
         
          
    }
}

export const GroupRoutesApi = new GroupRoutes().router;