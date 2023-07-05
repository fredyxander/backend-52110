import { config } from "../config/config.js";

let productsDao;
let cartsDao;
let usersDao;
let contactsDao;

const PERSISTENCE=config.server.persistence;

switch (PERSISTENCE) {
    case "mongo":
        //conexion a base de datos
        const {connectDB} = await import("../config/dbConnection.js");
        connectDB();
        const {ContactsMongo} = await import("./mongo/contacts.mongo.js");
        // const {ProductsMongo} = await import("./mongo/products.mongo.js");
        contactsDao = new ContactsMongo();
        // productsDao = new ProductsMongo();
        break;

    case "memory":
        const {ContactsMemory} = await import("./memory/contacts.memory.js");
        // const {ProductsMemory} = await import("./memory/products.memory.js");
        contactsDao = new ContactsMemory();
        // productsDao = new ProductsMemory();
        break;

    case "sql":

        break;
    case "files":

        break;
};

export {contactsDao, productsDao, cartsDao, usersDao};