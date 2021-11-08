import {combineReducers, createStore} from "redux"
import ProductsReducer from "./products/productsReducer"
import wishListReducer from "./wishListReducer"
import CartReducer from "./CartReducer"
import CartCounterReducer from "./CartCounterReducer"
import UserReducer from "./user/userReducer"

const reducers = combineReducers({ProductsReducer, wishListReducer,CartReducer,UserReducer,CartCounterReducer})

const store = createStore(reducers)

export default store