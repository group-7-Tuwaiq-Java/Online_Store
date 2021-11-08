import {combineReducers, createStore} from "redux"
import ProductsReducer from "./products/productsReducer"
import wishListReducer from "./wishListReducer"
import CartReducer from "./CartReducer"
const reducers = combineReducers({ProductsReducer, wishListReducer,CartReducer,UserReducer})
import UserReducer from "./user/userReducer"


const store = createStore(reducers)

export default store