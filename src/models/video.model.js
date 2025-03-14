
import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

import bcrypt from "bcrypt"

import jsonwebtoken  from "jsonwebtoken";




const videoSchema=new mongoose.Schema({

    videoFile:{
        type:String,
        required:true,
    
    },
    thumbnail:{
        type:String,
        required:true,
    },

    title:{
        type:String,
        required:true,
    },

    description:{
        type:String,
        required:true,
    },

    duration:{
        type:Number,
        required:true,

    },

    views:{
        type:Number,
        default:0,
    },
    

    isPublished:{
        type:Boolean,
        default:true,
    },

    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }


   
}, {timestamps:true}) 






videoSchema.plugin(mongooseAggregatePaginate)

export const Video= mongoose.model("Video",videoSchema)