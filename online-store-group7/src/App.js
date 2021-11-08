import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch,useSelector } from "react-redux";
import store from './components/reducers/store';
import Home from './components/Home';
import NavBar from './components/NavBar';
import SignIn from './components/SignIn';
import { BrowserRouter,Routes,Route,Link, Switch } from 'react-router-dom';
import WishList from './components/WishList';
import Product from './components/Product';
import ProductsList from './components/ProductsList';
import SignUp from './components/SignUp';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Footer from './components/footer';


function App() {

  const state = useSelector((state)=>{
    // console.log(state);
    return {
      product: state.ProductsReducer.products,
    }
  })

  return (
    <>
    <div className="page">
    <NavBar/>
       
      
          <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/wishList" element={<WishList/>} /> */}
                <Route path="/signIn" element={<SignIn />} />
                <Route path="/products" element={<ProductsList/>} /> 
                <Route path="/SignUp" element={<SignUp/>} />
                <Route path="/productDetails/:id" element={<ProductDetails/>} />         
                <Route path="/Cart" element={<Cart/>} />  
              </Routes>
    <div className="footerGrid">
          <Footer/>
    </div>
    </div>
    </>
  );
}

export default App;
