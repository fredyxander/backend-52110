import { Router } from "express";
// import { ContactsMongo } from "../dao/mongo/contacts.mongo.js";
// import { ContactsMemory } from "../dao/memory/contacts.memory.js";
// import {contactsDao, productsDao, cartsDao, usersDao} from "../dao/factory.js";

// const contactsService = contactsDao;
import { contactsService } from "../services/index.js";

const router = Router();

router.get("/", async(req,res)=>{
    try {
        const contacts = await contactsService.getContacts();
        res.json({status:"success", data:contacts});
    } catch (error) {
        res.json({status:"error", message:error.message});
    }
});

router.post("/",async(req,res)=>{
    try {
        const contactCreated = await contactsService.createContact(req.body);
        res.json({status:"success", data:contactCreated});
    } catch (error) {
        res.json({status:"error", message:error.message});
    }
});

export {router as contactsRouter};