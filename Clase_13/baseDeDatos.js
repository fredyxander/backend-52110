use colegio

db.estudiantes.insertMany([
    {name:"pepe", apellido:"perez", age:20, curso:"html"},
    {name:"laura", apellido:"diaz", age:25, curso:"css"},
]);

db.estudiantes.find()

db.estudiantes.insertOne({name:"pepe", apellido:"lopez", age:25, curso:"html"})



// Se creará una base de datos llamada “baseCRUD”.
use baseCRUD

// Se agregará una colección llamada “mascotas”
// Se agregarán 3 mascotas con las propiedades: nombre, especie, edad
db.mascotas.insertMany([
    {nombre:"patitas", especie:"perro", edad:2},
    {nombre:"pelusa", especie:"gato", edad:5},
    {nombre:"tony", especie:"perro", edad:4},
])

// Se buscarán mascotas por su especie-mascotas especie perro
db.mascotas.find({especie:"perro"})

// Contar el número de mascotas totales agregadas.
db.mascotas.count()

// Tiempo estimado: 10 minutos




// DESAFIO CRUD
// Sobre una base de datos llamada “colegio”, crear una colección “estudiantes” donde se agregarán documentos con los siguientes datos:
// nombre
// apellido
// curso
// edad
// correo
// sexo
// Crear 5 estudiantes (Insert Many) con los campos mencionados arriba. Además, crear un estudiante sólo con nombre, apellido y curso. ¿Es posible?

db.estudiantes.insertMany([
    {nombre:"pepe", apellido:"perez", curso:"html", edad:20,correo:"pepe@gmail.com",sexo:"M"},
    {nombre:"laura", apellido:"diaz", curso:"css", edad:18,correo:"laura@gmail.com",sexo:"F"},
    {nombre:"pedro", apellido:"morales", curso:"css", edad:25,correo:"pedro@gmail.com",sexo:"M"},
    {nombre:"Lucas", apellido:"lopez", curso:"javascript", edad:28,correo:"lucas@gmail.com",sexo:"M"},
    {nombre:"maria", apellido:"diaz", curso:"javascript", edad:25,correo:"maria@gmail.com",sexo:"F"},
    {nombre:"Juan", apellido:"mora", curso:"css"}
])

// Realizar una búsqueda para obtener a todos los estudiantes.
db.estudiantes.find()

// Realizar una búsqueda para obtener a todos los estudiantes de sexo H (hombre)
db.estudiantes.find({sexo:"M"})

// Realizar un conteo para obtener el número de documentos totales.
db.estudiantes.count()

// Realizar un conteo para obtener el número de documentos totales que cumplan con el criterio: “Es mujer”
db.estudiantes.count({sexo:"F"})




// Basado en nuestra base de datos “colegio”
// Se agregarán 5 estudiantes más, con diferentes campos y con la misma estructura. además, crear 1 alumno sólo con nombre.
use colegio
db.estudiantes.insert({nombre:"Natalia"})
// Realizar una búsqueda aplicando ordenamientos, proyecciones, saltos y límites.

// proyeccion:
db.estudiantes.find({},{nombre:1,curso:1})

//ordenamientos:
//estduiantes ordenados por la edad de menor a mayor
> db.estudiantes.find({},{nombre:1,edad:1}).sort({edad:1})
// { "_id" : ObjectId("6458fe8caae1a0a0f2d7a05c"), "nombre" : "Juan" }
// { "_id" : ObjectId("6459050daae1a0a0f2d7a05d"), "nombre" : "Natalia" }
// { "_id" : ObjectId("6458fe8caae1a0a0f2d7a058"), "nombre" : "laura", "edad" : 18 }
// { "_id" : ObjectId("6458fe8caae1a0a0f2d7a057"), "nombre" : "pepe", "edad" : 20 }
// { "_id" : ObjectId("6458fe8caae1a0a0f2d7a059"), "nombre" : "pedro", "edad" : 25 }
// { "_id" : ObjectId("6458fe8caae1a0a0f2d7a05b"), "nombre" : "maria", "edad" : 25 }
// { "_id" : ObjectId("6458fe8caae1a0a0f2d7a05a"), "nombre" : "Lucas", "edad" : 28 }

//saltos- escapar dos documentos de la consulta
> db.estudiantes.find({},{nombre:1,edad:1}).sort({edad:1}).skip(2)
// { "_id" : ObjectId("6458fe8caae1a0a0f2d7a058"), "nombre" : "laura", "edad" : 18 }
// { "_id" : ObjectId("6458fe8caae1a0a0f2d7a057"), "nombre" : "pepe", "edad" : 20 }
// { "_id" : ObjectId("6458fe8caae1a0a0f2d7a059"), "nombre" : "pedro", "edad" : 25 }
// { "_id" : ObjectId("6458fe8caae1a0a0f2d7a05b"), "nombre" : "maria", "edad" : 25 }
// { "_id" : ObjectId("6458fe8caae1a0a0f2d7a05a"), "nombre" : "Lucas", "edad" : 28 }

//limites: numero de documentos que quiero obtener de una consulta
> db.estudiantes.find({},{nombre:1,edad:1}).sort({edad:1}).skip(2).limit(3)
// { "_id" : ObjectId("6458fe8caae1a0a0f2d7a058"), "nombre" : "laura", "edad" : 18 }
// { "_id" : ObjectId("6458fe8caae1a0a0f2d7a057"), "nombre" : "pepe", "edad" : 20 }
// { "_id" : ObjectId("6458fe8caae1a0a0f2d7a05b"), "nombre" : "maria", "edad" : 25 }


// Se analizarán los resultados de las proyecciones, saltos, ordenamientos y límites. ¿Cómo se comportan los documentos que tienen campos incompletos?+




// Operaciones con Filtros
// Sobre la base y los datos cargados anteriormente
// Insertar cinco documentos más en la colección clientes con los siguientes datos:
// { "nombre" : "Pablo", "edad" : 25 }
// { "nombre" : "Juan", "edad" : 22 }
// { "nombre" : "Lucia", "edad" : 25 }
// { "nombre" : "Juan", "edad" : 29 }
// { "nombre" : "Fede", "edad" : 35 }

use empresa
db.clientes.insertMany([
    { "nombre" : "Pablo", "edad" : 25 },
    { "nombre" : "Juan", "edad" : 22 },
    { "nombre" : "Lucia", "edad" : 25 },
    { "nombre" : "Juan", "edad" : 29 },
    { "nombre" : "Fede", "edad" : 35 }
])

// Listar todos los documentos de la colección clientes ordenados por edad descendente.
db.clientes.find({}).sort({edad:-1})

// Listar el cliente más joven.
db.clientes.find({}).sort({edad:1}).limit(1)

// Listar el segundo cliente más joven.
db.clientes.find({}).sort({edad:1}).skip(1).limit(1)

// Listar los clientes llamados 'Juan'
db.clientes.find({nombre:"Juan"})

// Listar los clientes llamados 'Juan' que tengan 29 años.
db.clientes.find({nombre:"Juan",edad:29})

// Listar los clientes llamados 'Juan' ó 'Lucia'.
db.clientes.find({$or:[{nombre:"Juan"},{nombre:"Lucia"}]})
db.clientes.find({nombre:{$in:["Juan","Lucia","juan","lucia"]}})

// Listar los clientes que tengan más de 25 años.
db.clientes.find({edad:{$gt:25}})

// Listar los clientes que tengan 25 años ó menos.
db.clientes.find({edad:{$lte:25}})

// Listar los clientes que NO tengan 25 años.
db.clientes.find({edad:{$ne:25}})

// Listar los clientes que estén entre los 26 y 35 años.
db.clientes.find({edad:{$gte:26,$lte:35}})

// Actualizar la edad de Fede a 36 años, listando y verificando que no aparezca en el último listado.
db.clientes.updateOne({nombre:"Fede"},{$set:{edad:36}})

// Actualizar todas las edades de 25 años a 26 años, listando y verificando que aparezcan en el último listado.
db.clientes.updateMany({edad:25},{$set:{edad:26}})

// Borrar los clientes que se llamen 'Juan' y listar verificando el resultado.
db.clientes.deleteMany({nombre:"Juan"})

