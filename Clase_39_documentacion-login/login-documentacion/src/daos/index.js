import { UserMongo } from "./managers/users.mongo.js";
import { connectDB } from "../config/dbConnection.js";

connectDB();
const usersDao = new UserMongo();

export {usersDao};