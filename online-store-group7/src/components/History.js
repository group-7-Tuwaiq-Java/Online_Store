import { useSelector } from "react-redux";

function History() {

    const gitHistory = useSelector((state)=>{
        return {
          historyy:state.HistoryReducer,
        }
      })
      console.log(gitHistory.historyy.orderHistory);
    return (
        <>
        <div>
            {gitHistory.historyy.orderHistory.map(e=>{
            return(
                <div className="wishList">
                    <div className="gridList">
                    <img src={e.imgPr} className="imgSize"/>
                    <p>{e.namePr}</p>
                    <p>{e.pricePr}SR</p>
                    </div>
                </div>
            )
            })}
        </div>
        </>
            );
}
  
export default History;