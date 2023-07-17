export const generateUserErrorParams = (userId)=>{
    return `El id del usuario no es valido, debe ser de tipo de numerico, pero se recibio un dato de tipo ${typeof userId}`
};