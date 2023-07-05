import { UsersMongo } from "./mongo/managers/users.mongo.js";
import { BusinessMongo} from "./mongo/managers/business.mongo.js";
import { OrdersMongo } from "./mongo/managers/orders.mongo.js";
import { connectDB } from "../config/dbConnection.js";

connectDB();
const usersDao = new UsersMongo();
const businessDao = new BusinessMongo();
const ordersDao = new OrdersMongo();

export {usersDao, businessDao, ordersDao};