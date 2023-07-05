class TicketManager{
    #precioBaseDeGanancia=0.15;//añade un costo adicional al precio de cada evento
    constructor(){
        this.eventos = [];
    }

    getEventos(){
        return this.eventos;
    }

    agregarEvento(nombre, lugar, precio,capacidad=50,fecha){
        //creamos el evento
        // let newId;
        // if(!this.eventos.length){
        //     newId=1;
        // } else{
        //     newId = this.eventos[this.eventos.length-1].id+1;
        // }
        let newId = this.eventos.length +1;
        const nuevoEvento={
            id:newId,
            nombre,
            lugar,
            precio:precio*(1+this.#precioBaseDeGanancia),
            capacidad,
            fecha: new Date().toLocaleDateString(), //MM/DD/YYYY
            participantes:[]
        }
        this.eventos.push(nuevoEvento);
        console.log("nuevoEvento", nuevoEvento);
    }

    agregarUsuario(idEvento, idUsuario){
        //evaluar que el evento exista, y retornando la posicion del evento en el arreglo
        const indiceEvento = this.eventos.findIndex(elm=>elm.id === idEvento);
        // console.log("indiceEvento", indiceEvento);
        this.eventos[indiceEvento].participantes.push(idUsuario);
    }

    ponerEventoEnGira(idEvento, nuevaLocalidad, nuevaFecha){
        // El método debe copiar el evento existente, con una nueva localidad, nueva fecha, nuevo id y sus participantes vacíos (Usar spread operator para el resto de las propiedades)
        //buscamos el evento
        const eventoEncontrado = this.eventos.find(elm=>elm.id === idEvento);
        if(eventoEncontrado){
            const nuevoEvento = {
                ...eventoEncontrado,
                id:this.eventos.length+1,
                lugar:nuevaLocalidad,
                fecha:nuevaFecha,
                participantes:[]
            };
            this.eventos.push(nuevoEvento);
        } else {
            console.log("No se encontro el evento");
        }
    }
}

const eventosEEUU = new TicketManager();
eventosEEUU.agregarEvento("cine","cinema 18",500,1000);
eventosEEUU.agregarEvento("cena","restaurante del oceano",900,100);
eventosEEUU.agregarEvento("parque diversiones","parque Disney",2000,3000);
console.log(eventosEEUU.getEventos());

eventosEEUU.agregarUsuario(2,"usuario101A");
eventosEEUU.agregarUsuario(2,"usuario200");
console.log(eventosEEUU.getEventos());

eventosEEUU.ponerEventoEnGira(3,"parque acuatico","4/12/2023");
console.log(eventosEEUU.getEventos());