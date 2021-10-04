import express from 'express';
import { MessageController } from '../controller/Message.controller';


export class MessageRoutes {
    router: express.Router;
    constructor() {
      this.router = express.Router();
      this.routes();
    }
    routes() {
      //checking messages
        this.router.post('/checkmessages', async (req, res, next) => {
          try {
                const message =req.body
                const checkmessage = await new MessageController().checkmessage(message);
                res.send(checkmessage)
          }catch(err){
              next(err)
          }
    })

    }
}
export const MessageRoutesApi = new MessageRoutes().router;