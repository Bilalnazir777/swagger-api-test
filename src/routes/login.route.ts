import express from 'express';
import {LoginController} from '../controller/Login.Controller';
import { IUSER } from '../types/document/IUSER';
import CustomeError from '../utills/error';
import {LoginRequest} from '../types/request/Login.Request';
import { LoginResponse } from '../types/response/Login.Response';

export class Loginroutes{
    router:express.Router
    constructor(){
        this.router = express.Router()
         this.routes()  
    }
    routes(){
        //login routes
        this.router.post('/login' , async(req,res,next)=>{

        try{
           var response = await new LoginController().login(req.body)
           res.json({
              token_key:response.TOKEN_KEY,
              message:response.message
           })
        }
        catch(err){
          next(err)
        }

        })
    }
}
export const loginrouteapi = new Loginroutes().router