import {useDispatch , useSelector} from "react-redux";
import {increment,decrement} from "./reducers/CartCounterReducer";
function Counter({element}) {
    const counter = useSelector((state) =>{
        return{
          counter:state.CartCounterReducer.count
        }})
    
    
        
        const dispatch=useDispatch();
        return(
            <div>
                       
        <div>
            <button onClick={() => dispatch(increment(element))}>+</button>
            {counter.counter.id === element.idPr ?  <p>{counter.counter.value}</p> : ""}
            
            <button onClick={() => dispatch(decrement(element))}>-</button>
        </div>
    
    </div>
    );
}
export default Counter;