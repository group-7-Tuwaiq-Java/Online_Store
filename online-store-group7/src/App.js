import './App.css';
import { useDispatch,useSelector } from "react-redux";
import store from './components/reducers/store';
import Home from './components/Home';


function App() {

  const state = useSelector((state)=>{
    // console.log(state);
    return {
      product: state.ProductsReducer.products,
    }
  })

  return (
    <>
    <div className="page">
       <Home/>
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
    </>
  );
}

export default App;
