import './App.css';
import { useDispatch,useSelector } from "react-redux";
import store from './components/reducers/store';
import Home from './components/Home';
import NavBar from './components/NavBar';
import { BrowserRouter,Routes,Route,Link, Switch } from 'react-router-dom';
import WishList from './components/WishList';
import SignIn from './components/SignIn';



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
          <Route path="/wishList" element={<WishList/>} />
          <Route path="/signIn" element={<SignIn />} />
        </Routes>
    </div>
    </>
  );
}

export default App;
