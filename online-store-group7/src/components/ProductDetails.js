import productDetails from "../styleFiles/productDetails.css"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useNavigate } from 'react-router-dom';


function ProductDetails({products}) {
    const dispatch = useDispatch();
    const { id } = useParams();

    const navigate = useNavigate();
    const state = useSelector((state)=>{
        return {
          product: state.ProductsReducer.products,
        }
      })

    return (
        <div>
            {state.product.map((e,i)=>{
                if(e.idPr == id){
            return(
                <div className="details">
                    <div className="productItem">
                        <img src={e.imgPr} className="imgSize"
                        onClick={() => {navigate(`/productDetails/${e.idPr}`)}}/>
                        <p className="Name">{e.namePr}</p>
                        <p className="barnd">{e.brandPr}</p>
                        <p className="price">{e.pricePr}SR</p>
                        <button className="addToWishList" onClick={()=>{}}>Add to Wish List</button>
                        <button className="addToCart">Add to cart</button>
                    </div>
                 <div className="description">
                     <h2>Description:</h2>
                    <p className="Name">{e.detailesPr}</p>
                    <p className="barnd">{e.brandPr}</p>
                 </div>
                </div>
            )
                }
                else
                return;
            })}
        </div>
    );
}
  
export default ProductDetails;