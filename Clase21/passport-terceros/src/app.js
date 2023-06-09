import express from "express";
import {engine} from "express-handlebars";
import session from "express-session";
import MongoStore from "connect-mongo";
import { options } from "./config/options.js";
import { connectDB } from "./config/dbConnection.js";
import { __dirname } from "./utils.js";
import path from "path";
import passport from "passport";
import { initializePassport } from "./config/passport.config.js";

import { viewsRouter } from "./routes/views.routes.js";
import { authRouter } from "./routes/auth.routes.js";

const port = 8080;
const app =express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"/public")));

app.listen(port,()=>console.log(`Server listening on port ${port}`));

connectDB();

//configuracion de session
app.use(session({
    store:MongoStore.create({
        mongoUrl:options.mongo.url
    }),
    secret:"claveSecreta",
    resave:true,
    saveUninitialized:true
}));

//configuracion de passport
initializePassport();
app.use(passport.initialize());
app.use(passport.session());

//configuracion de handlebars
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,"/views"));

//routes
app.use(viewsRouter);
app.use("/api/sessions", authRouter);