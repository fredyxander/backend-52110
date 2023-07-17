export class CustomError{
    //genera la estructura standard del error
    static createError({name,cause,message,errorCode}){
        const error = new Error(message,{cause});
        error.name=name;
        error.code=errorCode;
        console.log("error: ", error.name);
        throw error;
    }
}