import express from "express";
import { config } from "./config/config.js";
import session from "express-session";
import MongoStore from "connect-mongo";
import { initPassport } from "./config/passport.config.js";
import passport from "passport";
import { swaggerSpecs } from './config/swaggerConfig.js';
import swaggerUI from "swagger-ui-express";

import { sessionsRouter } from "./routes/sessions.routes.js";
import { usersRouter } from "./routes/users.routes.js";

const port = config.server.port;
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(port,()=>console.log("server ok"));

//configuracion session
app.use(session({
    store: MongoStore.create({
        mongoUrl:config.mongo.url
    }),
    secret:config.server.sessionKey,
    resave:false,
    saveUninitialized:false
}));

//configuracion passport
initPassport();
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use("/api/sessions", sessionsRouter);
app.use("/api/users", usersRouter);
app.use("/documentation",swaggerUI.serve,swaggerUI.setup(swaggerSpecs));