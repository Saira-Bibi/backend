import mongoose from "mongoose";
const addressSchema = new mongoose.Schema({

    user:{
        type :mongoose.Schema.Types.ObjectId,
        ref :"User",
        required: true,
    },
    adressline1:{
        type : String,
        required : true,
    },
    adressline2:{
        type : String,
    },

 
    city:{
        type : String,
        required : true,
    },
    state:{
        type : String,
        required : true,
    },
    postalCode:{
        type : String,
        required : true,
    },
    country:{
        type : String,
        required : true,
    },
    phoneNumber:{
        type : String,
        required : true,
    },
    isDeleted:{
        type : Boolean,
        default : false,
    }
},{timestamps:true})
export const Address = mongoose.model("Address",addressSchema)