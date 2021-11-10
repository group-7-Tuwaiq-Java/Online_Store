const initialState ={
   userLoggedIn:undefined,
   isLogged:false
}

const IsLogged = (state = initialState,{type,payload})=>{
    // console.log(payload);
    switch (type){
        case "LOG_IN":
            return{
                userLoggedIn:payload.userName,
                isLogged:payload.isLogged
            }
    
        default:
            return state;
    }
        
};

export default IsLogged