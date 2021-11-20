import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SignIn from "./components/SignIn";
import WishList from "./components/WishList";
import ProductsList from "./components/ProductsList";
import SignUp from "./components/SignUp";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Footer from "./components/footer";
import AdminPage from "./components/AdminPage";
import History from "./components/History";
import Search from "./components/search";
import ProductCategory from "./components/ProductCategory";

function App({ userName }) {
  return (
    <>
      <div className="page">
        <NavBar userName={userName} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wishList" element={<WishList />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/productDetails/:id" element={<ProductDetails />} />
          <Route path="/:id" element={<ProductCategory />} />
          <Route path="/adminPage" element={<AdminPage />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/history" element={<History />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <div className="footerGrid">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
