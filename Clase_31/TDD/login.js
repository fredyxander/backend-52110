const login = (username, password)=>{
    if(!password) return "No se ha proporcionado un password";
    if(!username) return "No se ha proporcionado un usuario";
    if(username==="coderUser" && password==="123") return "logueado";
};

//1paso.crear las pruebas para los diferentes escenarios
//1.
console.log('1.Si se pasa un password vacío, la función debe consologuear (“No se ha proporcionado un password”)');
let resultado1 = login("usuario1","");
if(resultado1 === "No se ha proporcionado un password"){
    console.log('-->Test1 paso')
} else {
    console.log('-->Test1 NO paso')
};

//2.
console.log('2. Si se pasa un usuario vacío, la función debe consologuear (“No se ha proporcionado un usuario”)');
let resultado2 = login("","pass");
if(resultado2 === "No se ha proporcionado un usuario"){
    console.log('-->Test2 paso')
} else {
    console.log('-->Test2 NO paso')
};

//3.
console.log("3. Si  el usuario y contraseña coinciden, consologuear (“logueado”)")
let resultado3 = login("coderUser","123");
if(resultado3 === "logueado"){
    console.log("-->Test3 paso")
} else {
    console.log('-->Test3 No paso')
};