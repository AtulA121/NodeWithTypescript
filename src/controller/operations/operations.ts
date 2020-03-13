import userSchema from "../../database/schemas/userSchema";
import eventSchema from "../../database/schemas/eventSchema";
import jwt from "jsonwebtoken";

export class Operation{
    constructor(){
    }

    async registerUser(obj : any){
        let result=await userSchema.collection.insert(obj);
        return result;
    }

    async loginUser(obj : any){
        let result : any;
        let res : any =await userSchema.findOne({
            $and : [{
                    email : obj.email
                },{
                    password : obj.password
                }
            ]
        });
        if(res){
            let token=jwt.sign({userId : res._id},"a121",{});
            result={};
            result.token=token;
        }
        return result;
    }

    async createEvent(obj : any){
        let userObj= new eventSchema({
            userId : obj.userId,
            game : obj.game,
            discription : obj.discription,
            userName : obj.userName
        });
        let result=await eventSchema.collection.insert(userObj);
        return result;
    }

}