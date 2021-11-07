import { Form,Button } from "react-bootstrap";
function SignUp() {

    return (
        <div>
     <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" placeholder="Enter username" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Enter your Email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="secondary" size="lg">
    Sign Up 
  </Button>
  </Form>
        </div>
    );
}
  
export default SignUp;