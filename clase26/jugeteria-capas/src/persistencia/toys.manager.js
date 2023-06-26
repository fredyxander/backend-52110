const toys = [
    {title:"pelota",price:200}
];

export const get = ()=>{
    return toys;
}

export const saveToy = (toy)=>{
    toys.push(toy);
    return "juguete creado";
};