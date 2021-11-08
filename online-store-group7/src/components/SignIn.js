import { Form , Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import "../styleFiles/signIn.css"
function SignIn() {
const navigate=useNavigate();
    return (

        <>
        
        <h1>Sign In</h1>
    <Form className="formSignIn">
  <Form.Group className="mb-3 " controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" placeholder="Enter your username" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Enter your Password" />
  </Form.Group>
  <Button variant="secondary" size="lg">
    Sign In
  </Button>
  <p>Don't have an account?</p>
  <Button variant="secondary" size="lg" onClick={()=>{navigate("/SignUp")}}>
    Sign Up 
  </Button>
  </Form>
 
</>
    );
}
  
export default SignIn;