import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const username = "jainrishi0311"; 
        const password = encodeURIComponent("<R@pagaria>"); 
        const dbName = DB_NAME; 

        const uri = `mongodb+srv://jainrishi0311:R%40pagaria@rishi.u3po9nw.mongodb.net/${dbName}`;

        const connectionInstance = await mongoose.connect(uri);
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1);
    }
};

export default connectDB;
