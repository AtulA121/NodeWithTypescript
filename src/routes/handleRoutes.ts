import { NextFunction, Response, Request } from "express";

let listeners : any;

export class Routes{
    constructor(){
        listeners=[];
    }

    getRequestHandle(req : Request,res : Response,next : NextFunction){
        console.log("getRequestHandle : ",req.url);
        for(let i=0;i<listeners.length;i++){
            if(req.url === listeners[i].url){
                listeners[i].call(req,res,next);
            }
        }
    }

    postRequestHandle(req : Request,res : Response,next : NextFunction){
        console.log("postRequestHandle : ",req.url);
        for(let i=0;i<listeners.length;i++){
            if(req.url === listeners[i].url){
                listeners[i].call(req,res,next);
            }
        }
    }

    async addListener(obj : {}){
        await listeners.push(obj);
    }

}