import  "../styleFiles/product.css"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

import  "../styleFiles/product.css"
import { Link } from "react-router-dom";

function Product({products}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div className="Product">
            {products.map((e,i)=>{
            return(
                <div className="productItem" >
                  <Link to={`/productDetails/${e.idPr}`} >  <img src={e.imgPr} className="imgSize"/> </Link>
                    <p className="Name">{e.namePr}</p>
                    <p className="barnd">{e.brandPr}</p>
                    <p className="price">{e.pricePr}SR</p>
                    <button className="addToWishList" onClick={(e)=>{ }}>Add to Wish List</button>
                    <button className="addToCart"  onClick={(e)=>{}}>Add to cart</button>
                 </div>
            )
            })}
        </div>
    );
}
  
export default Product;