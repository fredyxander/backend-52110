//importaciones de la capa de persistencia o de datos
import { get, saveToy } from "../persistencia/toys.manager.js";

export const getToysService = ()=>{
    const result = get();
    return result;
};

export const saveToyService = (toy)=>{
    const result = saveToy(toy);
    return result;
};