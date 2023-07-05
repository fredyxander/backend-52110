import { ContactsRepository } from "./contacts.service.js";
import {contactsDao} from "../dao/factory.js";

export const contactsService = new ContactsRepository(contactsDao);