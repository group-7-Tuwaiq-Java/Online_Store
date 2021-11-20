import productCategory from "../styleFiles/productCategory.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { AddToCart } from "./reducers/user/action";
import { Link } from "react-router-dom";
import { AddToWishList } from "./reducers/wishList/action";

function ProductCategory({ products }) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const logged = useSelector((state) => {
    return {
      users: state.IsLogged,
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
  const state = useSelector((state) => {
    return {
      product: state.ProductsReducer.products,
    };
  });

  return (
    <div className="Product">
      {state.product.map((e, i) => {
        if (e.typePr == id) {
          return (
            <div className="productItem">
              <Link to={`/productDetails/${e.idPr}`}>
                {" "}
                <img src={e.imgPr} className="imgSize" />
              </Link>
              <p className="Name">{e.namePr}</p>
              <p className="barnd">{e.brandPr}</p>
              <p className="price">{e.pricePr}SR</p>
              {logged.users.isLogged && (
                <button
                  className="addToWishList"
                  onClick={() => {
                    const cartFilter = wish.lista.filter(
                      (f) => f.namePr === e.namePr
                    );
                    if (cartFilter.length > 0) {
                      alert("Item Already in Wish List");
                    } else {
                      const action3 = AddToWishList(e);
                      dispatch(action3);
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
                    if (cartFilter.length > 0) {
                      alert("Item Already in Cart");
                    } else {
                      let obj = {
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
                      dispatch(AddToCart(obj));
                    }
                  }}
                >
                  Add to cart
                </button>
              )}
            </div>
          );
        } else return;
      })}
    </div>
  );
}

export default ProductCategory;
