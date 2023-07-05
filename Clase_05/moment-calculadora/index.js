//importar o requerir el modulo
const moment = require("moment");

//fecha actual
const today = moment();
console.log("today: ", today.format("DD/MM/YYYY"));

//fecha nacimiento     //year/month/day
const birthday = moment("1945-02-28");
console.log("birthday: ",birthday.format("DD/MM/YYYY"));

if(birthday.isValid()){
    console.log("dias de diferencia",today.diff(birthday,"days"));
} else {
    console.log("fecha de nacimiento invalida");
}