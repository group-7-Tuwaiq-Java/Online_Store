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

        case "INCREMENT":
        const newInc = state.cart.map((elem)=>{
            if(elem.idPr===payload.idPr){

                return [{...elem, count: elem.count+1}]
            }
        })
        const res = state.cart.map(obj => newInc.find(old=> old.idPr === obj.idPr) || obj)
        return {
            cart: res
        }
    //   case "DECREMENT":
      
    //     return {
    //         count:[...state.count, newDec]
    //     }
            default:
                return state
        }
}

export default CartReducer