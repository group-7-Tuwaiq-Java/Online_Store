import { useSelector,useDispatch } from "react-redux";
import { Products } from "./objectsOfProducts";
import {increment,decrement} from "./reducers/CartCounterReducer"
import {Form,Button} from "react-bootstrap";
import "../styleFiles/Cart.css"
import { useState } from "react";

function Cart() {
  
const state=useSelector((state)=>{
    return{
        cart:state.CartReducer.cart,
    }
})
 
const counter = useSelector((state) =>{
return{
  counter:state.CartCounterReducer
}})
const dispatch=useDispatch();


return (       
        <div>
          <>
           <h2>Cart</h2>
           {state.cart.map(e=>{
             return(
            <div className="Cart">
            <img src={e.imgPr}/>
            <p>{e.namePr}</p>
            <p>{e.pricePr}SR</p>
            <button onClick={() => dispatch(increment())}>+</button>
            <p>{counter.counter}</p>
            <button onClick={() => dispatch(decrement())}>-</button>
            </div>
           
           )
           })}
            </>
           <hr></hr>
            
{/* order details */}
           <>
    <Form className="CartForm">
        <h3>Shipment Information</h3>
  <Form.Group className="mb-3 " controlId="formBasicName">
    <Form.Label>Name:</Form.Label>
    <Form.Control type="text" placeholder="Enter your name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPhone">
    <Form.Label>Phone Number:</Form.Label>
    <Form.Control type="Phone" placeholder="Enter your Phone number" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Label>Address:</Form.Label>
    <Form.Control type="text" placeholder="1234 Main St" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Label>City:</Form.Label>
    <Form.Control type="text" placeholder="Enter your City" />
  </Form.Group>
    <Form.Group controlId="formGridState">
      <Form.Label>Delivery: </Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>DHL</option>
        <option>Aramex</option>
        <option>Express</option>
      </Form.Select>
    </Form.Group>  

  <Button variant="secondary" type="submit">
    Order
  </Button>
</Form>
</>
        </div>
    );
    
}
  
export default Cart;
