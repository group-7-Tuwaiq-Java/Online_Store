import Product from "./Product";
import { useSelector } from "react-redux";
function Home() {
    const state = useSelector((state)=>{
        console.log(state);
        return {
          product: state.ProductsReducer.products,
        }
      })
    //to display 4 product in home page
    let arr=[]
    for (let i = 0; i < 4; i++) {
        arr[i]=state.product[i]
    }


    return (
        <div>

            <h2>Shop by Catogray:</h2>
            <div className="HomeCatogray">
            <img src="electronic-device.png"/>
            <img src="video-game.png"/>
            <img src="shoes.png"/>
            <img src="spatula.png"/>       
            <img src="furnitures.png"/>
            <img src="hiking.png"/>
            <img src="Fashion.png"/>
            <img src="toys.png"/>
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
                    <button className="addToWishList">Add to Wish List</button>
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