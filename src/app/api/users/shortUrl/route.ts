import { Connect } from "@/dbConfig/dbConfig";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import urlSchema from "@/models/shortUrl";

Connect();
mongoose.connect(process.env.MONGO_URI!)

export async function POST(request : NextRequest, response : NextResponse){
    try {
        const body = await request
        const reqBody = await request.json();
        const {url} = reqBody;
        // console.log(url); 

        const dataEntry = await urlSchema.create({full : url});
        const postFix: string = dataEntry.short;


        return NextResponse.json({
            messege : "path is working",
            sucess : true,
            shortUrl : `https://minilinkr.vercel.app/${postFix}`
        });
    } catch (error) {
        console.log("error sending request", error);
    }
}