import { Form,Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { addUser } from "./reducers/user/action";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function SignUp() {
  const [userName, setUserName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const state = useSelector((state)=>{
    return {
      users:state.UserReducer.users,
    }
  })

 const newUserObj={
    userName:userName,
    password:password,
    email:email
  }

  const dispatch = useDispatch()
  function AddNewUser(){
    const checkIfExist = state.users.filter((e) =>newUserObj.userName === e.userName || newUserObj.email === e.email)
    if (checkIfExist.length>0){
      console.log(state.users);
      alert("User Name or Email already exist ")
    }
    else{
    console.log(checkIfExist);
    const action = addUser(newUserObj)
    dispatch(action)  
  }
  
}
  // console.log(state.users);

    return (
        <div>
     <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" placeholder="Enter username" onChange={(e)=>{setUserName(e.target.value)}} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Enter your Email"  onChange={(e)=>{setEmail(e.target.value)}}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
  </Form.Group>
  <Button variant="secondary" size="lg" onClick={AddNewUser}>
    Sign Up 
  </Button>
  </Form>
        </div>
    );
}
  
export default SignUp;