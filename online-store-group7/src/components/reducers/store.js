import {combineReducers, createStore} from "redux"
import ProductsReducer from "./products/productsReducer"
import wishListReducer from "./wishListReducer"
import CartReducer from "./CartReducer"


import UserReducer from "./user/userReducer"

const reducers = combineReducers({ProductsReducer, wishListReducer,CartReducer,UserReducer})

const store = createStore(reducers)

export default store