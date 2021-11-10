import {useDispatch , useSelector} from "react-redux";
import {increment,decrement} from "./reducers/CartCounterReducer";
function Counter() {
    const counter = useSelector((state) =>{
        return{
          counter:state.CartCounterReducer
        }})
        const state=useSelector((state)=>{

            return{
                cart:state.UserReducer.cart,
        }
        })
        
        const dispatch=useDispatch();
        return(
            <div>
             {state.cart.map(e=>{
        return (
               
        <div>
            <button onClick={() => dispatch(increment(e))}>+</button>
            <p>{counter.counter}</p>
            <button onClick={() => dispatch(decrement(e))}>-</button>
            </div>
    ) })}
    </div>
    );
}
export default Counter;