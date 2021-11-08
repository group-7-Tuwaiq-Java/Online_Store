const initialState={
  cart:[],
}
const CartReducer=(state=initialState,{type,payload})=>{
  switch(type){
    case "ADD_TO_CART":
      return{
        cart:[...state.cart,payload],
      };
      default:
      return state;
  }
}
export const AddToCart=(item)=>{
  return{
    type:"ADD_TO_CART",
    payload:item,
  };
};
export default CartReducer;
