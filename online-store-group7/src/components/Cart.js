import { useDispatch, useSelector } from "react-redux";
import { Products } from "./objectsOfProducts";
import {Form,Button} from "react-bootstrap";
import "../styleFiles/Cart.css"
import { useEffect, useState } from "react";
import UserReducer from "./reducers/user/userReducer";
import {increment,decrement} from "./reducers/cartReducer/cartReducer";
import { AddToHistory } from "./reducers/orderHistory/action";
import { ClearCart } from "./reducers/cartReducer/action";
import { useNavigate } from "react-router";
import { DeleteFromCart } from "./reducers/cartReducer/action";


function Cart() {
const [totalPrice,setTotalPrice]=useState(0);
const [subtotalPrice,setsubTotalPrice]=useState();
const [couponvalue,setCouponvalue]=useState();
const [countValue, setCount] = useState()
const dispatch=useDispatch();
const navigate=useNavigate();

const state=useSelector((state)=>{
  console.log(state)
    return{
      cart:state.CartReducer.cart,
}
})
// const counter = useSelector((state) =>{
//   return{
//     counter:state.CartReducer.count
//   }})



console.log(state.cart);
//calculate the total with delivery
const code="React";
const change=(e)=>{
  if(e.target.value=="delivery"){
    let delivery=subtotalPrice+20
    setTotalPrice(delivery);
  }
}
//Calculate the total with promo code 
const handlecahnge=(e)=>{
  setCouponvalue(e.target.value)
}
const coupon =(e)=>{
  e.preventDefault()
if(couponvalue ==code){
  const discount = subtotalPrice*0.20
  setTotalPrice(subtotalPrice-discount)
  console.log(subtotalPrice-discount)
  console.log(subtotalPrice)
}else{
  alert("invalid promo code")
}
}
useEffect(()=>{
  let sub=0;
  state.cart.map(e=>{
    sub +=e.pricePr*e.count;
  })
  setTotalPrice(sub)
  setsubTotalPrice(sub)
},[countValue])

console.log(totalPrice);

function CheckOut(){
  state.cart.map(e=>{
    const action = AddToHistory(e)
    console.log(action);
    dispatch(action)
  })
 
  const action2 = ClearCart()
  dispatch(action2)
  navigate("/history")
}
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
            <button onClick={() =>{ 
              setCount(e.count)
              dispatch(increment(e))}}>+</button>
           <p> {e.count}</p>
            <button onClick={() => {
              setCount(e.count)
              dispatch(decrement(e))}}>-</button>

            
            <button onClick={()=>{
               const deleteItem = state.cart.filter(((f)=>f.idPr !== e.idPr))
               const action2 = DeleteFromCart(deleteItem)
              //  console.log(deleteItem);
               dispatch(action2)
            }}>Delete From Cart</button>

            </div>
           )
           })}
           <h3>total:</h3>
           <p>{totalPrice}</p>
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
      <Form.Select defaultValue="Choose..." onChange={change}>
        <option>Choose...</option>
        <option value="collection">Collection</option>
        <option value="delivery">Delivery</option>
      </Form.Select>
    </Form.Group>  
    <Form.Group className="mb-3 " controlId="formBasicName">
    <Form.Label>Promo Code:</Form.Label>
    <Form.Control type="text" placeholder="Enter promo code" onChange={handlecahnge}/>
  </Form.Group>

  <Button variant="secondary" type="submit" onClick={coupon}>
    Applay
  </Button>
  
  <Button variant="secondary" type="button" onClick={CheckOut}>

    Checkout
  </Button>
</Form>
</>
            {/* <p>total:</p>
           <p>{setTotalPrice}</p> */}
        </div>
         
    );
    
}
  
export default Cart;
