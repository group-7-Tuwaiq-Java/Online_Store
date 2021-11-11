import { Form , Button, Navbar} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import "../styleFiles/signIn.css"
import NavBar from "./NavBar";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import App from "../App";
import { ChangeLogged } from "./reducers/IsLogged/action";
import { CreateCart } from "./reducers/cartReducer/action";
import { ChangeAdminState } from "../isAdmin/action";

function SignIn() {
const navigate=useNavigate();
const [userName,setUserName] = useState()
const [pass,setPass] = useState()
const dispatch = useDispatch()


const state = useSelector((state)=>{
  return {
    users:state.UserReducer.users,
  }
})
const logged = useSelector((state)=>{
  return {
    users:state.IsLogged.isLogged,
  }
})
const Admin = useSelector((state)=>{
  return {
    admin:state.AdminReducer.state.isAdmin,
  }
})


function SignInFunction(){
  
  const checkUser= state.users.filter((e)=>userName === e.userName && pass === e.password)
  if (checkUser.length>0){
    if (userName === "user1"){
      const changeAdmin={
        isAdmin:!Admin.admin
      }
      const action2 = ChangeAdminState(changeAdmin)
      dispatch(action2)
      navigate("/")
    }
    console.log(checkUser);
    const checkIfLogged={
      userName:userName,
      isLogged:!logged.users
    }
    const action = ChangeLogged(checkIfLogged)
    dispatch(action)
    navigate("/")
  }
  else{
    alert("User Name Or Password Wrong")
  }

  
}
    return (

        <>
<Form className="formSignIn">
        <h1>Sign In</h1>

  <Form.Group className="mb-3 " controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" placeholder="Enter your username" onChange={(e)=>{setUserName(e.target.value)}} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Enter your Password" onChange={(e)=>{setPass(e.target.value)}}/>
  </Form.Group>
  <div className="buttonDesign">
  <Button variant="secondary" size="lg" onClick={SignInFunction}>
    Sign In
  </Button>
  <p><br></br>Don't have an account?</p>
  <Button variant="secondary" size="lg" onClick={()=>{navigate("/SignUp")}}>
    Sign Up 
  </Button>
  </div>
  </Form>
 
</>
    );
}
  
export default SignIn;