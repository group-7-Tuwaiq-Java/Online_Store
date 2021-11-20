import "../styleFiles/home.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "./reducers/cartReducer/action";
import { AddToWishList } from "./reducers/wishList/action";
import electronicDevice from "../Images/electronicDevice.png";
import Fashion from "../Images/Fashion.png";
import furnitures from "../Images/furnitures.png";
import hiking from "../Images/hiking.png";
import shoes from "../Images/shoes.png";
import spatula from "../Images/spatula.png";
import toys from "../Images/toys.png";
import videoGame from "../Images/videoGame.png";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logged = useSelector((state) => {
    return {
      users: state.IsLogged,
    };
  });
  const state = useSelector((state) => {
    return {
      product: state.ProductsReducer.products,
    };
  });
  const cart = useSelector((state) => {
    return {
      cart: state.CartReducer.cart,
    };
  });
  const wish = useSelector((state) => {
    return {
      lista: state.WishListReducer.wishList,
    };
  });
  const state2 = useSelector((state2) => {
    return {
      product: state2.CartReducer,
    };
  });

  let arr = [];
  for (let i = 0; i < 4; i++) {
    arr[i] = state.product[i];
  }

  return (
    <div>
      <h2>Shop by Catogray:</h2>
      <div className="HomeCatogray">
        <Link to={`/${"Electronics"}`}>
          {" "}
          <img src={electronicDevice} />{" "}
        </Link>
        <Link to={`/${"Video Games"}`}>
          {" "}
          <img src={videoGame} />{" "}
        </Link>
        <Link to={`/${"Shoes"}`}>
          {" "}
          <img src={shoes} />{" "}
        </Link>
        <Link to={`/${"Kitchen"}`}>
          {" "}
          <img src={spatula} />{" "}
        </Link>
        <Link to={`/${"Furniture"}`}>
          {" "}
          <img src={furnitures} />{" "}
        </Link>
        <Link to={`/${"Camping & Hiking"}`}>
          {" "}
          <img src={hiking} />{" "}
        </Link>
        <Link to={`/${"Fashion"}`}>
          {" "}
          <img src={Fashion} />{" "}
        </Link>
        <Link to={`/${"Toys & Games"}`}>
          {" "}
          <img src={toys} />{" "}
        </Link>
        <p>Electronics</p>
        <p>Video Games</p>
        <p>Shoes</p>
        <p>Kitchen</p>
        <p>Furniture</p>
        <p>Camping and Hiking</p>
        <p>Fashion</p>
        <p>Toys and Games</p>
      </div>
      <h2 className="header">Products</h2>
      <div className="Products">
        {arr.map((e, i) => {
          return (
            <div className="productItem">
              <Link to={`/productDetails/${e.idPr}`}>
                {" "}
                <img src={e.imgPr} id="img" className="imgSize" />{" "}
              </Link>
              <p className="Name">{e.namePr}</p>
              <p className="barnd">{e.brandPr}</p>
              <p className="price">{e.pricePr}SR</p>
              {logged.users.isLogged && (
                <button
                  className="addToWishList"
                  onClick={() => {
                    console.log(wish.lista);
                    const cartFilter = wish.lista.filter(
                      (f) => f.namePr === e.namePr
                    );
                    if (cartFilter.length > 0) {
                      alert("Item Already in Wish List");
                    } else {
                      const action3 = AddToWishList(e);
                      dispatch(action3);
                      console.log(state2);
                    }
                  }}
                >
                  Add to Wish List
                </button>
              )}
              {logged.users.isLogged && (
                <button
                  className="addToCart"
                  onClick={() => {
                    const cartFilter = cart.cart.filter(
                      (f) => f.namePr === e.namePr
                    );
                    console.log(cartFilter);
                    if (cartFilter.length > 0) {
                      alert("Item Already in Cart");
                    } else {
                      const obj = {
                        idPr: e.idPr,
                        namePr: e.namePr,
                        imgPr: e.imgPr,
                        pricePr: e.pricePr,
                        detailesPr: e.detailesPr,
                        typePr: e.typePr,
                        ratingPr: e.ratingPr,
                        brandPr: e.brandPr,
                        quantity: e.quantity,
                        count: 1,
                      };
                      const action2 = AddToCart(obj);
                      dispatch(action2);
                      console.log(state2);
                    }
                  }}
                >
                  Add to cart
                </button>
              )}
            </div>
          );
        })}
      </div>
      <button
        className="center"
        onClick={() => {
          navigate("/products");
        }}
      >
        show all products
      </button>
    </div>
  );
}

export default Home;
