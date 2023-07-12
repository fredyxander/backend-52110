import {Faker, faker, es} from "@faker-js/faker";

const customFaker = new Faker({
    locale:[es]
});

const {commerce, database, image,string,internet, lorem, person, datatype} = customFaker;

//generar productos
const generateProduct = ()=>{
    return {
        id:database.mongodbObjectId(),
        title:commerce.productName(),
        stock:parseInt(string.numeric(2)),
        image:image.urlPicsumPhotos(),
        code:string.alphanumeric(10),
        // description:lorem.sentence()
    }
};

// const product = generateProduct();
// console.log(product);

//generar usuarios
export const generateUser = ()=>{
    const numberOfProducts = parseInt(string.numeric()) || 1;
    let products=[];
    for(let i=0;i<numberOfProducts;i++){
        const newProduct = generateProduct();
        products.push(newProduct);
    }
    return {
        id:database.mongodbObjectId(),
        first_name:person.firstName(),
        last_name:person.lastName(),
        email:internet.email(),
        avatar:image.avatar(),
        cart:products,
        premium:datatype.boolean(),
        role:datatype.boolean() ? 'Cliente' : 'Vendedor',
        jobTitle:person.jobTitle()
    }
};
// console.log(generateUser());