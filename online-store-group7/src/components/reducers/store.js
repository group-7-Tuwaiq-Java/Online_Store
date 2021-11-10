import {combineReducers, createStore} from "redux"
import ProductsReducer from "./products/productsReducer"
import CartCounterReducer from "./CartCounterReducer"
import UserReducer from "./user/userReducer"
import IsLogged from "./IsLogged/loggedReducer"
import CartReducer from "./cartReducer/cartReducer"
import WishListReducer from "./wishList/wishListReducer"
import AdminReducer from "../../isAdmin/isAdminReducer"
import HistoryReducer from "./orderHistory/HistoryReducer"


const reducers = combineReducers({ProductsReducer,UserReducer,CartCounterReducer,IsLogged,CartReducer,WishListReducer,AdminReducer,HistoryReducer})




const store = createStore(reducers)

export default store