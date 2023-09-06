import express from "express";
import cors from "cors";

import { paymentRouter } from "./routes/payment.routes.js";

const port = 8080;
const app = express();

app.listen(port,()=>console.log("server ok"));

app.use(cors());

app.use("/api/payments", paymentRouter);