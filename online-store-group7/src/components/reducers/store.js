import {combineReducers, createStore} from "redux"
import ProductsReducer from "./products/productsReducer"
import CartCounterReducer from "./CartCounterReducer"
import UserReducer from "./user/userReducer"
import IsLogged from "./IsLogged/loggedReducer"

const reducers = combineReducers({ProductsReducer,UserReducer,IsLogged})



const store = createStore(reducers)

export default store