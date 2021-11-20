import { combineReducers, createStore } from "redux";
import ProductsReducer from "./products/productsReducer";
import UserReducer from "./user/userReducer";
import IsLogged from "./IsLogged/loggedReducer";
import CartReducer from "./cartReducer/cartReducer";
import WishListReducer from "./wishList/wishListReducer";
import AdminReducer from "./isAdmin/isAdminReducer";
import HistoryReducer from "./orderHistory/HistoryReducer";
import SearchReducer from "./search/searchReducer";

const reducers = combineReducers({
  ProductsReducer,
  UserReducer,
  IsLogged,
  CartReducer,
  WishListReducer,
  AdminReducer,
  HistoryReducer,
  SearchReducer,
});

const store = createStore(reducers);

export default store;
