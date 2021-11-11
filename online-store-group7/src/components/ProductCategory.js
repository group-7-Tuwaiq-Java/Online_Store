import productCategory from "../styleFiles/productCategory.css"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useNavigate } from 'react-router-dom';
import {AddToCart} from './reducers/user/action'


function ProductCategory({products}) {
    const dispatch = useDispatch();
    const { id } = useParams();
    console.log("id"+id);
    const navigate = useNavigate();
    const state = useSelector((state)=>{
        return {
          product: state.ProductsReducer.products,
        }
      })

    return (
        <div className="Product">
            {state.product.map((e,i)=>{
                console.log(id);
                console.log(e.typePr);
                console.log(e.typePr == id);
                if(e.typePr == id){
            return(
                    <div className="productItem">
                        <img src={e.imgPr} className="imgSize"/>
                        <p className="Name">{e.namePr}</p>
                        <p className="barnd">{e.brandPr}</p>
                        <p className="price">{e.pricePr}SR</p>
                        <button className="addToWishList" onClick={()=>{}}>Add to Wish List</button>
                        <button className="addToCart"  onClick={()=>{
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
                       }}>Add to cart</button>
                    </div>
            )
                }
                else
                return;
            })}
        </div>
    );
}
  
export default ProductCategory;