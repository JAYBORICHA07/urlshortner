import mongoose from "mongoose";

export async function Connect(){
    console.log(": Connecting")
    try {
        const uri = process.env.MONGO_URI
        console.log(uri)
        mongoose.connect(uri!);
        const connection = mongoose.connection;

        connection.on('connectd', () =>{
            console.log("mongodb Connected Sucessfully");
        });

        connection.on('error', (error) => {
            console.log("mongofb connection error." + error);
            process.exit();
        })
    } catch (error) {
        console.log("Something went Wrong");
        console.log(error);
    }
}