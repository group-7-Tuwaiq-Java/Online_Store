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
//counter
// const counter = (state = 1, action) => {
//     switch (action.type) {
//       case "INCREMENT":
//         return state + 1;
//       case "DECREMENT":
//         return state - 1;
//       default:
//         return state;
//     }
//   };
  
//   export default counter;
//   export const increment = () => {
//     return {
//       type: "INCREMENT",
//     };
//   };
//   export const decrement = () => {
//     return {
//       type: "DECREMENT",
//     };
//   };