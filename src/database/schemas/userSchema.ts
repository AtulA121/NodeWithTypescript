import mongoose from "mongoose";

const Schema=mongoose.Schema;
const userSchema=new Schema({
    userName : String,
    email : String,
    password : String
});

export default mongoose.model("userSchema",userSchema);