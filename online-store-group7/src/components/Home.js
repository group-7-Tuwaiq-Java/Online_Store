import { useDispatch, useSelector } from "react-redux";
import WishList from "./WishList";
import homeBanner from "../Images/homeBanner.png"
import electronicDevice from "../Images/electronicDevice.png"
import Fashion from "../Images/Fashion.png"
import furnitures from "../Images/furnitures.png"
import hiking from "../Images/hiking.png"
import shoes from "../Images/shoes.png"
import spatula from "../Images/spatula.png"
import toys from "../Images/toys.png"
import videoGame from "../Images/videoGame.png"
import {  useNavigate } from "react-router-dom";
import '../styleFiles/home.css'
// import {AddToCart} from './reducers/user/action'
import { AddToCart } from "./reducers/cartReducer/action";
import { AddToWishList } from "./reducers/wishList/action";
import Product from "./Product";
import { Link } from "react-router-dom";


function Home() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const state = useSelector((state)=>{
        return {
          product: state.ProductsReducer.products,
        }
      })
      const state2 = useSelector((state2)=>{
        return {
          product: state2.CartReducer,
        }
      })
    // const state2 = useSelector((state)=>{
    //     return {
    //       wishList: state.wishListReducer.wishList,
    //     }
    // })
    //to display 4 product in home page
    let arr=[]
    for (let i = 0; i < 4; i++) {
        arr[i]=state.product[i]
    }
    // console.log(state2.wishList);
    return (
        <div>
            <img id="homeBanner"src={homeBanner}/>
            <div className="catograies">
             <h2>Shop by Catogray</h2>
            <div className="HomeCatogray">
            <img src={electronicDevice}/>
            <img src={videoGame}/>
            <img src={shoes}/>
            <img src={spatula}/>       
            <img src={furnitures}/>
            <img src={hiking}/>
            <img src={Fashion}/>
            <img src={toys}/>
            <p>Electronics</p>
            <p>Video Games</p>
            <p>Shoes</p>
            <p>Kitchen</p>
            <p>Furniture</p>
            <p>Camping and Hiking</p>
            <p>Fashion</p>
            <p>Toys and Games</p>
            </div>
       </div>

            <h2>Products</h2>

            <div className="Products">
            {arr.map((e,i)=>{
            return(
                <div className="productItem">
                   <img src={e.imgPr} className="imgSize"/>
                    <p className="Name">{e.namePr}</p>
                    <p className="barnd">{e.brandPr}</p>
                    <p className="price">{e.pricePr}SR</p>
                    <button className="addToWishList" onClick={()=>{
                       console.log(e)
                       const action3 = AddToWishList(e)
                       dispatch(action3)
                       console.log(state2)
                    }}>Add to Wish List</button>
                    <button className="addToCart" onClick={()=>{
                        console.log(e)
                        const obj ={
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
                        const action2 = AddToCart(obj)
                        dispatch(action2)
                        console.log(state2)
                         }}>Add to cart</button>
                 </div>
            )
            })}
            </div>
            <button className="center" onClick={()=>{navigate("/products")}}>show all products</button>
        </div>
    );
}
  
export default Home;