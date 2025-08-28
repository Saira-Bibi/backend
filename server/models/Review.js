import mongoose, { mongo } from "mongoose";
 const  reviewSchems = new mongoose.Schema({
   user:{
      type :mongoose.Schema.Types.ObjectId,
      ref : "User",
      required : true,
   }
   ,
   product:{
      type : mongoose.Schema.Types.ObjectId,
      ref : "Product",
      required : true,
   
 },
   rating:{
      type : Number,
      required : true,
      min : 1,
      max : 5,
   },
   comment:{
      type : String,
      required : true,
   }
},
    {timestamps:true})
    export const Review = mongoose.model("Review", reviewSchems)