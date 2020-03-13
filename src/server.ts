import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import router from "./routes/route";
import mongoose from "mongoose";
import {Listeners} from "./routes/listeners";
import redis, { RedisClient } from "redis";

export class App{

    app : Application;
    port : number | string;
    redisClient : any;

    constructor(port : number | string){
        this.app=express();
        this.port=port;
        this.setting();
        this.database();
        this.middlewares();
        this.routes();
        this.listeners();
        this.redisListen();
    }

    setting(){
        this.app.set("port",this.port || process.env.port || 3000);
    }

    async database(){
        let connection=await mongoose.connect("mongodb://localhost:27017/a121");
        console.log("database connection : "+connection);
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(morgan("dev"));
        this.app.use(bodyParser.json());
    }

    routes(){
        this.app.use(router);
    }

    async listeners(){
        let listener=new Listeners();
        await listener.addListeners();
    }

    async listen(){
        await this.app.listen(this.app.get("port"));
        console.log("server listen on ",this.app.get("port"));
    }

    async redisListen(){
        this.redisClient=redis.createClient();
        await this.redisClient.on("connect",()=>{
            console.log("connected to redis : ");
        });

        // this.redisClient.hmset("key1",{"a121" : "a121", "a1n1" : "a1n1"});
        this.redisClient.hgetall("key1",(err : any,reply : any)=>{
            console.log(err , "  ", reply);
        });

        let obj={
            a121 : "a121"
        }
        this.redisClient.hmset("list",obj);
        this.redisClient.hgetall("list",(err : any, list : any)=>{
            console.log(list);
        });
    }

}