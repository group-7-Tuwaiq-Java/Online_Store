import { Form,Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styleFiles/signIn.css"
function SignUp() {

    return (
       <>
            <h1>Sign Up</h1>
     <Form className="formSignIn">
  <Form.Group className="mb-3 " controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" placeholder="Enter your username" />
  </Form.Group>
  <Form.Group className="mb-3 " controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Enter your Email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Enter your password" />
  </Form.Group>
  <Button variant="secondary" size="lg">
    Sign Up
  </Button>
  </Form>
        </>
    );
}
  
export default SignUp;