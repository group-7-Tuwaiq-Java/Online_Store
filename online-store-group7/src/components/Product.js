import product from "../styleFiles/product.css"
import { useDispatch, useSelector } from "react-redux";
import { AddToList } from "./reducers/wishListReducer";
import { useNavigate } from 'react-router-dom';

import { AddToCart } from "./reducers/CartReducer";

import  "../styleFiles/product.css"

function Product({products}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div className="Product">
            {products.map((e,i)=>{
            return(
                <div className="productItem" onClick={() => {navigate(`/productDetails/${e.idPr}`)}}>
                    <img src={e.imgPr} className="imgSize"/>
                    <p className="Name">{e.namePr}</p>
                    <p className="barnd">{e.brandPr}</p>
                    <p className="price">{e.pricePr}SR</p>
                    <button className="addToWishList" onClick={(e)=>{
                        const action = AddToList(e);
                        dispatch(action);
                    }}>Add to Wish List</button>
                    <button className="addToCart"  onClick={(e)=>{
                        const action =AddToCart(e);
                        dispatch(action);
                    }}>Add to cart</button>
                 </div>
            )
            })}
        </div>
    );
}
  
export default Product;