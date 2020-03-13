import { NextFunction, Request, Response } from "express";
import {Operation} from "./operations/operations";
import jwt from "jsonwebtoken";

const operations=new Operation();

export class Controller{
    constructor(){
    }

    async getRequest(req : Request,res : Response,next : NextFunction){
        console.log("getRequest : ");
        await operations.registerUser(req.body);
        res.send({
            result : true
        });
    }

    verify(req : Request,res : Response,next : NextFunction){
        let token : any =req.headers["authtoken"];
        if(token){
            jwt.verify(token, "a121", (err : any, verifiedJwt : any) => {
                if(err){
                    res.send({
                        result : false
                    });
                }else{
                    req.body.userId=verifiedJwt.userId;
                    next();
                }
            });
        }
    }

    async registerUser(req : Request,res : Response,next : NextFunction){
        let result=await operations.registerUser(req.body);
        res.send({
            result : result
        });
    }

    async loginUser(req : Request,res : Response,next : NextFunction){
        let result=await operations.loginUser(req.body);
        res.send({
            result : result
        });
    }

    async createEvent(req : Request,res : Response,next : NextFunction){
        let result=await operations.createEvent(req.body);
        res.send({
            result : result
        });
    }
}