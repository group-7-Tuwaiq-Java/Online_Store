import {combineReducers, createStore} from "redux"
import ProductsReducer from "./productsReducer"

const reducers = combineReducers({ProductsReducer})

const store = createStore(reducers)

export default store