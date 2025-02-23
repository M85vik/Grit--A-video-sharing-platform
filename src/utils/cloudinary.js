import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"


    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUD_NAME, 
        api_key:process.env.CLOUD_API_KEY, 
        api_secret:process.env.CLOUD_API_SECRET
    });

    const uploadOnCloudinary= async (localFilePath)=>{
        try {
            if (!localFilePath) return null
            const response= await cloudinary.uploader
       .upload( localFilePath, {
               resource_type:"auto"
           }
       )

       console.log("File Uploaded Successfully :)",response.url);

       fs.unlinkSync(localFilePath)
       
          return response;
        } catch (error) {

            fs.unlinkSync(localFilePath) //remove the locallly saved temporary file, operation got failed 

            console.log("There is error in file upload :(", error);
            
            
        }
    }
   
   


export {uploadOnCloudinary}