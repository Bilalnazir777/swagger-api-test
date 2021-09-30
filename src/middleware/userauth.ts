import express, { Request, Response, NextFunction } from 'express'
import * as jwt from 'jsonwebtoken';
import { IUSER } from '../types/document/IUSER';
import CustomeError from "../utills/error"


//middleware that will verify token

export var TokenVarifier = (req: Request, res: Response, next: NextFunction) => {
    var token = req.header('token')
    if (!token) {
        let err = new CustomeError(403, "token required fof login");
        console.log('no token')
        next(err)

    }
    else {
        try {

            const decoded = jwt.verify(token, <jwt.Secret>process.env.TOKEN_KEY)
            req.body.username = <IUSER>decoded
            next()
        }
        catch (err) {
            err = new CustomeError(403, "invalid token key")
            next(err)
        }
    }

}