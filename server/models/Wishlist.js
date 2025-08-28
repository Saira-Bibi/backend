import mongoose from "mongoose";
const wishlistSchema = new mongoose.Schema({
    user:{
        type :mongoose.Schema.Types.ObjectId,
        ref :"User",
        required: true,
    },
    product:{
        type :mongoose.Schema.Types.ObjectId,
        ref :"Product",
        required: true,
    },
    isDeleted:{
        type : Boolean,
        default : false,
    }
},
    {timestamps:true,})
export const Wishlist = mongoose.model("Wishlist",wishlistSchema)