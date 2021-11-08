import {combineReducers, createStore} from "redux"
import ProductsReducer from "./products/productsReducer"
import CartCounterReducer from "./CartCounterReducer"
import UserReducer from "./user/userReducer"

const reducers = combineReducers({ProductsReducer,UserReducer})



const store = createStore(reducers)

export default store