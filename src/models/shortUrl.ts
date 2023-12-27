import mongoose, { mongo } from "mongoose";
import shortId from "shortid"


const shortUrlSchma = new mongoose.Schema({
    full : {
        type: String,
        required: true,
    },
    short : {
        type: String,
        required: true,
        default: shortId.generate
    },
    clicks : {
        type : Number,
        required : true,
        default: 0
    }
})

const urlSchema = mongoose.models.urlSchema || mongoose.model("urlSchema", shortUrlSchma);

export default urlSchema;