// import { Products } from "../objectsOfProducts";

const initialState ={
    users:[{
        userName:"user1",
        password:"12345",
        email:"user1@gmail.com",
        whishList:[],
        cart:[],
        orderHis:[]
    }],
}

const UserReducer = (state = initialState,{type,payload})=>{
    switch (type){
        case "ADD_USER":
            return{
                users:[...state.users, payload]
            }
    
        default:
            return state;
    }
        
};

export default UserReducer