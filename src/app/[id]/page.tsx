"use server"
import urlSchema from "@/models/shortUrl";
import { redirect } from 'next/navigation'

export default async function GET(req : any){
  const shortid =  req.params.id
  console.log(shortid);
  const dataObj = await urlSchema.findOne({short : shortid})
  const fullUrl = dataObj.full
  redirect(fullUrl);
}