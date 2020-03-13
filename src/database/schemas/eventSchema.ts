import mongoose from "mongoose";

const Schema=mongoose.Schema;
const eventSchema=new Schema({
    userName : String,
    userId : {
        type : mongoose.Types.ObjectId,
        ref : "userSchema"
    },
    discription : String,
    game : String 
});

export default mongoose.model("eventSchema",eventSchema);