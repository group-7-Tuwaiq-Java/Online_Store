import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function Search(){

    const state = useSelector((state)=>{
        return {
          search:state.SearchReducer,
        }
      })
      const state2 = useSelector((state)=>{
        return {
          product:state.ProductsReducer.products,
        }
      })
      console.log(state.search);
      const word = state.search.search
      console.log(state2.product[0].brandPr.toLowerCase());
      const myFilter = state2.product.filter(e=>e.brandPr.toLowerCase() === word.toLowerCase() || e.namePr.toLowerCase().includes(word.toLowerCase()))
      console.log(myFilter);
    return(
        <>
         <div>
            {myFilter.map(e=>{
                console.log("in map");
            return(
                <div className="wishList">
                    <div className="gridList">
                    <Link to={`/productDetails/${e.idPr}`} >  <img src={e.imgPr} className="imgSize"/></Link>
                    <p>{e.namePr}</p>
                    <p>{e.pricePr}SR</p>
                    </div>
                </div>
            )
            })}
        </div>
        </>
    )
}

export default Search