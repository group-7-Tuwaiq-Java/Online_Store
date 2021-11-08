import { Products } from "../../objectsOfProducts";

const initialState ={
    products:Products,
}

const ProductsReducer = (state = initialState,{type,payload})=>{
    switch (type){
    
        default:
            return state;
    }
        
};

export default ProductsReducer