function ProductsList() {

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