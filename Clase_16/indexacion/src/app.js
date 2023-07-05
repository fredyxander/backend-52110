import express from "express";
import { connectDB } from "./config/dbConnection.js";
import { usersModel } from "./models/user.model.js";

const port = 8080;
const app =express();

app.listen(port,()=>console.log(`Server listening on port ${port}`));

connectDB();

//routes
app.get("/measure",async(req,res)=>{
    try {
        const response = await usersModel.find({email:'sgodfroy3r@cnet.com'}).explain('executionStats');
        res.send(response);
    } catch (error) {
        res.send(error.message)
    }
})