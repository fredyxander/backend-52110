export class UsersManager{
    constructor(){
        this.users=[];
    };

    get(){
        return this.users;
    };

    saveUser(user){
        this.users.push(user);
        return "usuario creado";
    };

}