const initialState ={
    wishList:[],
}

const wishListReducer = (state = initialState,{type,payload})=>{
    switch (type){
        case "ADD_TO_LIST":
        return {
        wishList: payload,
      };
        default:
            return state;
    }
        
};
export const AddToList = (item) => {
    return {
      type: "ADD_TO_LIST",
      payload: item,
    };
  };
export default wishListReducer