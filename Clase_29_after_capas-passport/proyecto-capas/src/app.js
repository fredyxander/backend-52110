import express from "express";
import { engine } from 'express-handlebars';
import {__dirname} from "./utils.js";
import path from "path";
import session from "express-session";
import MongoStore from "connect-mongo";
import passport from "passport";
import { initPassport } from "./config/passport.config.js";
import {config} from "./config/config.js";
import cors from "cors";

import { viewsRouter } from "./routes/views.routes.js";
import { sessionsRouter } from "./routes/sessions.routes.js";
import {productsRouter} from "./routes/products.routes.js";

const port = config.server.port;
const app =express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.listen(port,()=>console.log(`Server listening on port ${port}`));

//configuración de handlebars
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,"/views"));

//configuración de la sesion
app.use(session({
    store:MongoStore.create({
        mongoUrl:config.mongo.url
    }),
    secret:config.server.secretSession,
    resave:true,
    saveUninitialized:true,
}));

//configuración de passport
initPassport();
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use(viewsRouter);
app.use("/api/sessions", sessionsRouter);
app.use("/api/products", productsRouter);