export const CreateCart = (cartObj) =>{
    return{
        type:"CREATE_CART",
        payload:cartObj,
    }
}

export const AddToCart = (product)=>{
    return{
        type:"ADD_TO_CART",
        payload:product
    }
}