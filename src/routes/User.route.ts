import express from 'express';
import { UserController } from '../controller/User.controller';
import { IUSER } from '../types/document/IUSER';
import { IUserManageResponse,IRegisterUserResponse,IDeleteUserResponse} from '../types/Response/User.Response';
import { IRegisterUserRequest,IUserManageRequest,IDeleteUserRequest } from '../types/Request/User.Request';
import CustomeError from '../utills/error';
import { TokenVarifier } from '../middleware/UserAuth';

export class UserRoutes {
  router: express.Router;
  constructor() {
    this.router = express.Router();
    this.routes();
  }
  routes() {
    //admin will register user
      this.router.post('/registeruser', async (req, res, next) => {
        try {
          const user:IRegisterUserRequest = req.body;
          const newuser:IRegisterUserResponse = await new UserController().RegisterUser(user);
          res.status(200).json({
            message: newuser
          });
        } catch (error) {
          next(error);
        }
      });
      //admin will delete user
      this.router.delete('/deleteuser', async (req, res, next) => {
          try {
              const delreq:IDeleteUserRequest = req.body;
              const Deleted_admin = await new UserController().DeleteUser(delreq);
              res.status(200).json({
                message: 'user deleted'
              });
            } catch (error) {
              next(error);
            }
          });
       //user can manage his profile
          this.router.put('/manageuser', async (req, res, next) => {
            try {
              const user: IUserManageRequest = req.body;
              const upadated_user:IUserManageRequest = await new UserController().ManageUser(user);
              const response = {
                upadated_user,
              };
              res.status(200).json({
                message: response
              });
            } catch (error) {
              next(error);
            }
          });
          //user can send messages
          this.router.post('/sendMessage', async (req, res, next) => {
            const message = req.body;
            const messages = await new UserController().sendMessage(message);
            if (messages) {
              res.status(200).send(messages);
            } else {
              res.status(400).send({
                status: 'not sent',
              });
            }
          });
  }
}
export const UserRoutesApi = new UserRoutes().router;