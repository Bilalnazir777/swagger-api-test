import { IADMIN } from '../types/document/IADMIN';
import { MainUser } from '../repositries/User.repositries';
import CustomeError from '../utills/error';
import { Get, Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse,Security } from "tsoa";
import { ISaveAdminResponse,} from '../types/Response/Admin.Response';
import { ISaveRequestAdmin, } from '../types/Request/Admin.Request';
import { MainAdmin } from '../repositries/Admin.repositries';
import { IUSER } from '../types/document/IUSER';
import { group } from 'console';
import { IGROUP } from '../types/document/IGROUP';
import { IMESSAGE } from '../types/document/IMESSAGE';

@Route('Admin')
@Tags('Admin')
@Security('api_key')
export class AdminController{
    constructor() {  }

    @Post('/saveAdmin')
    async SaveAdmin(@Body() admin:ISaveRequestAdmin) : Promise <ISaveAdminResponse>{
    const save_admin:IADMIN = await new MainAdmin().saveadmin(<IADMIN>(admin))
    return <ISaveAdminResponse>save_admin
    }
    
    
}
    
    
    