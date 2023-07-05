const {UserManager} = require("./userManager");

const rutaArchivo = "usuarios.json";
const manager = new UserManager(rutaArchivo);
// console.log("manager: ", manager);

const operaciones = async()=>{
    try {
        //obtener usuarios
        const users = await manager.getUsers();
        console.log("users", users);
        //agregamos un usuario
        await manager.createUser({nombre:"Juan", edad:30});
        await manager.createUser({nombre:"Camila", edad:50});
        //nuevos usuarios agregados
        const newUsers = await manager.getUsers();
        console.log("users: ", newUsers)
    } catch (error) {
        console.log(error);
    }
};
operaciones();