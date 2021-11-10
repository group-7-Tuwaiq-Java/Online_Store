// import { Products } from "../objectsOfProducts";

const initialState ={

    users:[{
        userName:"user1",
        password:"12345",
        email:"user1@gmail.com",
    }],
    // cart:[],
}

const UserReducer = (state = initialState,{type,payload})=>{
    // const arr = state[0].cart.slice()
    // console.log(payload);
    // console.log(state);
    // arr.push(payload)
    switch (type){
        case "ADD_USER":
            return{
                users:[...state.users, payload]
            }
        case "ADD_TO_CART":
            console.log(state.cart)
            return{
                users:state.users,
                // cart:[...state.users[0].cart, payload],
                
            };
 
         default:
            return state;
    }
        
};
// console.log(initialState.users[0].cart)
export default UserReducer