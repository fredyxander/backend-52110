import { contactsModel } from "./models/contacts.model.js";

export class ContactsMongo{
    async get(){
        try {
            const contacts = await contactsModel.find();
            return contacts;
        } catch (error) {
            console.log(error.message);
            throw new Error("No se pudieron obtener los contactos");
        }
    };

    async create(contactInfo){
        try {
            await contactsModel.create(contactInfo);
            return "contacto creado";
        } catch (error) {
            console.log(error.message);
            throw new Error("No se pudo guardar el contacto");
        }
    };
}