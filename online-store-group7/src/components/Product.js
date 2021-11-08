import { useDispatch, useSelector } from "react-redux";
import { AddToList } from "./reducers/wishListReducer";
import { AddToCart } from "./reducers/CartReducer";
import  "../styleFiles/product.css"

function Product({products}) {
    const dispatch = useDispatch();
    return (
        <div className="Product">
            {products.map((e,i)=>{
            return(
                <div className="productItem">
                    <img src={e.imgPr} className="imgSize"/>
                    <p className="Name">{e.namePr}</p>
                    <p className="barnd">{e.brandPr}</p>
                    <p className="price">{e.pricePr}SR</p>
                    <button className="addToWishList" onClick={()=>{
                        const action = AddToList(e);
                        dispatch(action);
                    }}>Add to Wish List</button>
                    <button className="addToCart"  onClick={()=>{
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