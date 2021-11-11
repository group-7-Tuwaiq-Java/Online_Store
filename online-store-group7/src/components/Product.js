import  "../styleFiles/product.css"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import {AddToCart} from './reducers/user/action'
import  "../styleFiles/product.css"
import { Link } from "react-router-dom";

function Product({products}) {

    const logged = useSelector((state)=>{
        return {
          users:state.IsLogged,
        }
      })
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
                  { logged.users.isLogged&& <button className="addToWishList" onClick={(e)=>{ }}>Add to Wish List</button>}
                  { logged.users.isLogged&&  <button className="addToCart"  onClick={()=>{
                            let obj ={
                            idPr:e.idPr,
                            namePr:e.namePr,
                            imgPr:e.imgPr,
                            pricePr:e.pricePr,
                            detailesPr:e.detailesPr,
                            typePr:e.typePr,
                            ratingPr:e.ratingPr,
                            brandPr:e.brandPr,
                            quantity:e.quantity,
                            count: 1
                        }
                        dispatch(AddToCart(obj)) 
                        }}>Add to cart</button>}
                 </div>
            )
            })}
        </div>
    );
}
  
export default Product;