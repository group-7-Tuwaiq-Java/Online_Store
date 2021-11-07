import {combineReducers, createStore} from "redux"
import ProductsReducer from "./productsReducer"
import wishListReducer from "./wishListReducer"

const reducers = combineReducers({ProductsReducer, wishListReducer})

const store = createStore(reducers)

export default store