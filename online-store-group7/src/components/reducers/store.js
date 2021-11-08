import {combineReducers, createStore} from "redux"
import ProductsReducer from "./products/productsReducer"
import wishListReducer from "./wishListReducer"
import UserReducer from "./user/userReducer"

const reducers = combineReducers({ProductsReducer, wishListReducer, UserReducer})

const store = createStore(reducers)

export default store