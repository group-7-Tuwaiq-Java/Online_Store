import "../styleFiles/adminPage.css";
import { useDispatch, useSelector } from "react-redux";
import { DleteProduct } from "./reducers/products/action";

function AdminPage() {
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      product: state.ProductsReducer.products,
    };
  });

  return (
    <>
      <div className="AdminGrid">
        {state.product.map((e) => {
          return (
            <div className="gridCard">
              <img src={e.imgPr} className="imgSize" />
              <p className="Name">{e.namePr}</p>
              <p className="barnd">{e.brandPr}</p>
              <p className="price">{e.pricePr}SR</p>
              <button
                className="addToWishList"
                onClick={() => {
                  const deleteItem = state.product.filter(
                    (f) => f.idPr !== e.idPr
                  );
                  const action = DleteProduct(deleteItem);
                  dispatch(action);
                  console.log(deleteItem);
                }}
              >
                Delete Product
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default AdminPage;
