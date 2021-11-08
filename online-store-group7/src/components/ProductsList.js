import { useSelector } from "react-redux";
import "../styleFiles/productsList.css"
function ProductsList() {
    const state = useSelector((state)=>{
        return {
          product: state.ProductsReducer.products,
        }
      })

    return (
        <div>
            <div className="cardPr">

{state.product.map(e=>{
  
  return(
  <div>
  <img src={e.imgPr} className="imgSize"/>
  <p>{e.namePr}</p>
  </div>
  )
})}

</div>
        </div>
    );
}
  
export default ProductsList;