import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function History() {
  const gitHistory = useSelector((state) => {
    const { HistoryReducer } = state;
    return {
      historyy: HistoryReducer,
    };
  });
  console.log(gitHistory.historyy.orderHistory);
  return (
    <>
      <div>
        {gitHistory.historyy.orderHistory.map((e) => {
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

export default History;
