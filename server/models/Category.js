import mongoose from "mongoose";
 const categorySchema = new mongoose.Schema({
    name:{
        type :String,
        required :true,
        unique:true,
    },
    quantity:{
        type : Number,
        required:true,
        default:0,
    },
    status:{
        type : Boolean,
        default : true,
        
    },
    description:{
        type : String,
        required : true,
    }   ,
    isDeleted:{
        type : Boolean,
        default : false,
    }





 },{timestamps:true})
 export const  Category =  mongoose .model("Category",categorySchema);