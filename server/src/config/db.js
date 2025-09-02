import mongoose from "mongoose";
import { DB_Name } from "../constant.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_Name}`);
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log(`Error in DB connection: ${error}`);
        process.exit(1);
    }
}

export default connectDB;