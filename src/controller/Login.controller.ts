
import { MainUser } from '../repositries/User.repositries';
import CustomeError from '../utills/error';
import { Get, Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse, Security } from "tsoa";
import { LoginResponse } from '../types/Response/Login.Response';
import { LoginRequest } from '../types/Request/Login.Request'
import jwt, { Secret } from "jsonwebtoken";

require('dotenv').config();


@Route('/')
@Tags('login')

export class LoginController {
    constructor() { }

    @Post("/login")
    async login(@Body() user: LoginRequest): Promise<LoginResponse> {
        const authuser = await new MainUser().ReturnUser(user)
        if (!authuser)
            throw new CustomeError(404, "user not varified because of invalid credential ")
        return <LoginResponse>{
            TOKEN_KEY: jwt.sign(JSON.stringify(authuser), <Secret>process.env.TOKEN_KEY),
            message: "credential approved"
        }
    }

}