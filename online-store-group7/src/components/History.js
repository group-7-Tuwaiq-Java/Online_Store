import { useSelector } from "react-redux";

function History() {

    const gitHistory = useSelector((state)=>{
        return {
          historyy:state.HistoryReducer,
        }
      })
      console.log(gitHistory.historyy);
    return (
        <>
        </>
            );
}
  
export default History;