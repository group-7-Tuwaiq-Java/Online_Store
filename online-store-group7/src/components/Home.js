import { useDispatch, useSelector } from "react-redux";
import { AddToList } from "./reducers/wishListReducer";
function Home() {
    const dispatch = useDispatch();
    const state = useSelector((state)=>{
        return {
          product: state.ProductsReducer.products,
        }
      })
    //to display 4 product in home page
    let arr=[]
    for (let i = 0; i < 4; i++) {
        arr[i]=state.product[i]
    }
    const addToWishList=()=>{
    //     console.log("inside on click");
    //     console.log(state.product);
    // const action = AddToList(state.product);
    // dispatch(action);
    }
    return (
        <div>
            <h2 className="header">Products</h2>
            <div className="Products">
            {arr.map((e,i)=>{
            return(
                <div className="productItem">
                    <img src={e.imgPr} className="imgSize"/>
                    <p className="Name">{e.namePr}</p>
                    <p className="barnd">{e.brandPr}</p>
                    <p className="price">{e.pricePr}RS</p>
                    <button className="addToWishList" onClick={addToWishList}>Add to Wish List</button>
                    <button className="addToCart">Add to cart</button>
                 </div>
            )
            })}
            </div>
            <button className="center">Show all products</button>
        </div>
    );
}
  
export default Home;