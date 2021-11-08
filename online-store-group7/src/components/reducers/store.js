import {combineReducers, createStore} from "redux"
import ProductsReducer from "./productsReducer"
import wishListReducer from "./wishListReducer"
import CartReducer from "./CartReducer"
const reducers = combineReducers({ProductsReducer, wishListReducer,CartReducer})

const store = createStore(reducers)

export default store