import { ADMINSchema } from '../model/Admin.model';
import { IADMIN } from '../types/document/IAdmin';
import { USERSchema } from '../model/User.model';
import { GROUPSchema } from '../model/Group.model';
import { MESSAGESchema } from '../model/Message.model'
import { IUSER } from '../types/document/IUSER';
import { IGROUP } from '../types/document/IGROUP';

export class MainUser {
    constructor() { }

    manageuser(user: IUSER) {
        return USERSchema.findByIdAndUpdate(user._id, user, {
            new: true
        })
    }
    registeruser(user: IUSER) {
        return new USERSchema(user).save();
    }
    deleteuser(_id: string) {
        return USERSchema.findByIdAndDelete(_id);
    }
    ReturnUser(user: any) {
        return USERSchema.findOne({ user_name: user.user_name, password: user.password })
    }
   

}