import { useDispatch, useSelector } from "react-redux";
import { AddToList } from "./reducers/wishListReducer";
function Home() {
    const dispatch = useDispatch();
    const state = useSelector((state)=>{
        return {
          product: state.ProductsReducer.products,
        }
      })
    const state2 = useSelector((state)=>{
        return {
          wishList: state.wishListReducer.wishList,
        }
    })
    //to display 4 product in home page
    let arr=[]
    for (let i = 0; i < 4; i++) {
        arr[i]=state.product[i]
    }
    console.log(state2.wishList);
    return (
        <div>

            <h2>Shop by Catogray:</h2>
            <div className="HomeCatogray">
            <img src="https://cdn-icons.flaticon.com/png/128/3696/premium/3696504.png?token=exp=1636274455~hmac=90f7f1f42146f70b6b36d5db1b12df87"/>
            <img src="https://cdn-icons.flaticon.com/png/128/2969/premium/2969711.png?token=exp=1636274509~hmac=aafa9afe2f83dc1cc60d1e0672514732"/>
            <img src="https://cdn-icons.flaticon.com/png/128/3289/premium/3289190.png?token=exp=1636274661~hmac=e7a9454051864273a4c20beb28cff7b3"/>
            <img src="https://cdn-icons.flaticon.com/png/128/3414/premium/3414712.png?token=exp=1636273859~hmac=3104e1c5309166d524f8a874ccdf2681"/>       
            <img src="https://cdn-icons-png.flaticon.com/128/2590/2590498.png"/>
            <img src="https://cdn-icons.flaticon.com/png/128/4065/premium/4065982.png?token=exp=1636274819~hmac=e2af4ab06ca8d82473070b606fbd8d07"/>
            <img src="https://cdn-icons.flaticon.com/png/128/3275/premium/3275384.png?token=exp=1636274287~hmac=388c08f5c3975b8c583890f877eadc72"/>
            <img src="https://cdn-icons.flaticon.com/png/128/4574/premium/4574309.png?token=exp=1636274856~hmac=8163842f08ac3906999a5a5e0e0e593c"/>
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
            {arr.map((e,i)=>{
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