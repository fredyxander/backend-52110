export const generateUserErrorInfo = (user)=>{
    return `
        Uno o mas campos no estas completos.
        Lista de campos requeridos:
        name:Este campo recibe string, pero se recibio ${user.name},
        lastname:Este campo recibe string, pero se recibio ${user.lastname},
        email:Este campo recibe string, pero se recibio ${user.email},
    `
};