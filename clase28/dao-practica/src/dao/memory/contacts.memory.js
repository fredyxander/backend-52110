export class ContactsMemory{
    constructor(){
        this.contacts=[];
    };

    get(){
        try {
            return this.contacts;
        } catch (error) {
            console.log(error.message);
            throw new Error("No se pudieron obtener los contactos");
        }
    };

    create(contactInfo){
        try {
            this.contacts.push(contactInfo);
            return "contacto creado";
        } catch (error) {
            console.log(error.message);
            throw new Error("No se pudo guardar el contacto");
        }
    };
}