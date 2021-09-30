

import { USERSchema } from '../model/User.model';
import { IUSER } from '../types/document/IUSER';


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