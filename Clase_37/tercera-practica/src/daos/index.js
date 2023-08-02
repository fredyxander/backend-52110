import {ProductsMongo} from "./managers/products.mongo.js";
import { UserMongo } from "./managers/users.mongo.js";
import { CartsMongo } from "./managers/carts.mongo.js";
import { connectDB } from "../config/dbConnection.js";

connectDB();
const productsDao = new ProductsMongo();
const usersDao = new UserMongo();
const cartsDao = new CartsMongo();

export {productsDao, usersDao, cartsDao};