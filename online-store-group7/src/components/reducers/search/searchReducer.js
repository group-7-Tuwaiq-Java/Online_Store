const initialState ={
    search:"",
}

const SearchReducer = (state = initialState,{type,payload})=>{
    switch (type){
        case "GET_SEARCH_WORD":
            return{
                search:payload
            }
    
        default:
            return state;
    }
        
};

export default SearchReducer