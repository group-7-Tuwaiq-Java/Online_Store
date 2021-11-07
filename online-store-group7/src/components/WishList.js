import { useDispatch, useSelector } from "react-redux";
function WishList() {
    const state = useSelector((state)=>{
        return {
          wishList: state.wishListReducer.wishList,
        }
    })
    console.log("in wishlist");
    return (
        
        <div>
            {state.wishList.map(e=>{
                console.log("in map");
            return(
                <div className="wishList">
                    <img src={e.imgPr} className="imgSize"/>
                    <p>{e.namePr}</p>
                    <p>{e.pricePr}SR</p>
                </div>
            )
            })}
        </div>
    );
}
  
export default WishList;