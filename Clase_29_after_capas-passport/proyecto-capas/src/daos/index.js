import {ProductsMongo} from "./managers/products.mongo.js";
import { UserMongo } from "./managers/users.mongo.js";
import { connectDB } from "../config/dbConnection.js";

connectDB();
const productsDao = new ProductsMongo();
const usersDao = new UserMongo();

export {productsDao,usersDao};