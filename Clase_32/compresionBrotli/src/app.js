import express from "express";
import compression from "express-compression";

const port = 8080;
const app = express();

// compression()

app.listen(port,()=>console.log(`Server listening on port ${port}`));

app.get("/endpointNormal",(req,res)=>{
    res.send("coderhouse".repeat(100000));
});

app.get("/endpointBrotli", compression({brotli:{enabled:true,zlip:{}}}) ,(req,res)=>{
    res.send("coderhouse".repeat(100000));
});