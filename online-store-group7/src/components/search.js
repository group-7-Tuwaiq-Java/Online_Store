import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Search() {
  const state = useSelector((state) => {
    return {
      search: state.SearchReducer,
    };
  });
  const state2 = useSelector((state) => {
    return {
      product: state.ProductsReducer.products,
    };
  });
  const word = state.search.search;
  const myFilter = state2.product.filter(
    (e) =>
      e.brandPr.toLowerCase() === word.toLowerCase() ||
      e.namePr.toLowerCase().includes(word.toLowerCase())
  );
  return (
    <>
      <div>
        {myFilter.map((e) => {
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
    </>
  );
}

export default Search;
