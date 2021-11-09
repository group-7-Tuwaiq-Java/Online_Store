// import { Products } from "../objectsOfProducts";

const initialState ={

    users:{
        userName:"user1",
        password:"12345",
        email:"user1@gmail.com",
        whishList:[],
        // cart:[],
        orderHis:[]
    },
    cart:[],
}

const UserReducer = (state = initialState,{type,payload})=>{
    // const arr = state[0].cart.slice()
    // console.log(payload);
    // console.log(state);
    // arr.push(payload)
    switch (type){
        case "ADD_USER":
            return{
                users:[...state, payload]
            }
        case "ADD_TO_CART":
            console.log(state.cart)
            return{
                cart:[...state.cart, payload],
            };
 
         default:
            return state;
    }
        
};
// console.log(initialState.users[0].cart)
export default UserReducer