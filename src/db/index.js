// require('dotenv').config()
import dotenv from "dotenv"
dotenv.config({
    path:'./env'
})


import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"




const connectDB=async ()=>{

    try {
        

      const connectionInstance=  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        console.log(`\n Mongo DB Connected `);

            // Check if the connectionInstance has the host property
            if (connectionInstance && connectionInstance.connection && connectionInstance.connection.host) {
                console.log(`\n MongoDB Connected !! DB Host: ${connectionInstance.connection.host}`);
            } else {
                console.log("Connected to MongoDB, but unable to retrieve host information.");
            }

        console.log("I think Connected" , DB_NAME);
        
        
    } catch ( error) {

        console.log("Mongo DB Connection Erro DB Folder",error)
        process.exit(1)
        
    }
}


export default connectDB




