import {combineReducers, createStore} from "redux"
import ProductsReducer from "./products/productsReducer"
import CartReducer from "./CartReducer"
import CartCounterReducer from "./CartCounterReducer"
import UserReducer from "./user/userReducer"

const reducers = combineReducers({ProductsReducer,CartReducer,UserReducer})



const store = createStore(reducers)

export default store