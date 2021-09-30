import { ADMINSchema } from '../model/Admin.model';
import { IADMIN } from '../types/document/IAdmin';


export class MainAdmin {
    constructor() { }
//saving admin 
    saveadmin(admin: IADMIN) {
       
        return new ADMINSchema(admin).save();
        
    }
   
}
   