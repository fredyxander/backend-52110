[
    {
        nombre:"pepe", apellido:"diaz", curso:"html", correo:"pepe@gmail.com"
    },
    {
        nombre:"laura", apellido:"perez", curso:"css", correo:"laura@gmail.com"
    },
    {
        nombre:"juan", apellido:"falcón", curso:"css", correo:"juan@gmail.com"
    },
    {
        nombre:"vanesa", apellido:"mora", curso:"nodejs", correo:"vanesa@gmail.com"
    }
]
//insertar varios documentos en la coleccion estudiantes
db.estudiantes.insertMany([
    {
        nombre:"pepe", apellido:"diaz", curso:"html", correo:"pepe@gmail.com"
    },
    {
        nombre:"laura", apellido:"perez", curso:"css", correo:"laura@gmail.com"
    },
    {
        nombre:"juan", apellido:"falcón", curso:"css", correo:"juan@gmail.com"
    },
    {
        nombre:"vanesa", apellido:"mora", curso:"nodejs", correo:"vanesa@gmail.com"
    }
])

//insertar un documento
db.estudiantes.insert(    {
    nombre:"paula", apellido:"morales", curso:"nodejs", correo:"paula@gmail.com"
})

//listar los documentos de la collecion estudiantes
db.estudiantes.find()

//crear una base de datos
use nombreDeLaBase

//visualizar la base de datos actual
db

//Crear la coleccion
db.createCollection("nonbre_de_la_coleccion")