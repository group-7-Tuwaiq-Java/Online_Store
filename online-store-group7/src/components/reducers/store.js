import {combineReducers, createStore} from "redux"
import ProductsReducer from "./products/productsReducer"
import CartCounterReducer from "./CartCounterReducer"
import UserReducer from "./user/userReducer"
import IsLogged from "./IsLogged/loggedReducer"
import CartReducer from "./cartReducer/cartReducer"


const reducers = combineReducers({ProductsReducer,UserReducer,CartCounterReducer,IsLogged,CartReducer})




const store = createStore(reducers)

export default store