// src/index.js
import dotenv from "dotenv";
dotenv.config({
    path: './env'
});
import connectDB from "./db/index.js";
import { app } from "./app.js"; // Import the app

connectDB().then(() => {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server is running at port ${process.env.PORT}`);
    });
}).catch((error) => {
    console.log("Mongo db Connection Failed Index file src folder", error);
});







 
































/*
const app=express()

;(async()=>{

    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        app.on("ERROR: index.js M85", (error)=>{ 
            console.log("ERROR M85", error);
            throw error
        })
    


        app.listen(process.env.PORT, ()=>{


            console.log(`App is listening on port ${process.env.PORT}`);
            
        })
    } catch (error) {
        
        console.error("ERROR : ",error)

        throw error
        
    }

})()  */

    



