import {ContactGetDto, ContactDto} from "../dao/dto/contact.dto.js";

export class ContactsRepository{
    constructor(dao){
        this.dao=dao;
    };

    async getContacts(){
        const contacts = await this.dao.get();
        const newContacts = contacts.map(contact=> new ContactGetDto(contact));
        return newContacts;
    };

    async createContact(contact){
        const contactTranformed = new ContactDto(contact);
        const contactCreated = await this.dao.create(contactTranformed);
        return contactCreated;
    }
}