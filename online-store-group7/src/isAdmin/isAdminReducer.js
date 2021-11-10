const initialState ={

    isAdmin:false
    
}

const AdminReducer = (state = initialState,{type,payload})=>{

    switch (type){
        case "CHANGE_ADMIN_STATE":
            return{
                isAdmin: payload
            }
            default: 
            return{
                state
            }
        }
    }

    export default AdminReducer