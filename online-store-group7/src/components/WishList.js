import "../styleFiles/wishList.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function WishList() {
  const state = useSelector((state) => {
    return {
      wishList: state.WishListReducer.wishList,
    };
  });
  return (
    <div>
      {state.wishList.map((e) => {
        return (
          <div className="wishList">
            <div className="gridList">
              <Link to={`/productDetails/${e.idPr}`}>
                {" "}
                <img src={e.imgPr} className="imgSize" />
              </Link>
              <p>{e.namePr}</p>
              <p>{e.pricePr}SR</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default WishList;
