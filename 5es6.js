const name = 'Aravind'
const userAge = 23

const user ={
    name,
    age :userAge,
    location:'bangalore'
}


// object destructuring


const product ={
    label : 'pencils',
    price: 20,
    salePrice: undefined
}

const{label,price} = product

console.log(label)
console.log(price)


const transcation= (type,{label,price}={})=>{
    console.log(type,label,price)
}

transcation('order',product)
