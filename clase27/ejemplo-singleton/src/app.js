import { MongoSingleton } from "./connectiondb.js";

const firstIntance = MongoSingleton.getInstance();
const secondInstance = MongoSingleton.getInstance();
const thirdInstance = MongoSingleton.getInstance();