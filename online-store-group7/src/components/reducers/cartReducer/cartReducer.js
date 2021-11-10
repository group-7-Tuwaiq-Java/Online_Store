const initialState ={
    cart:[],
}

const CartReducer =(state = initialState,{type,payload})=>{
    // const newArr = state.slice()
    // newArr.push(payload)
    console.log(state);
    switch (type){
    case "CREATE_CART":
            return{
                cart:[...state, payload]
            }
    case "ADD_TO_CART":
        return{
            cart:[...state.cart, payload]
        }
            default:
                return state
        }
}

export default CartReducer