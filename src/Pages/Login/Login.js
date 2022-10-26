import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import Form from 'react-bootstrap/Form';
import { FaGoogle , FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {

  const { providerLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider()

  const handleGoogleSignIn = () => {
      providerLogin(googleProvider)
          .then(result => {
              const user = result.user;
              console.log(user);
          })
          .catch(error => console.error(error))

  }

  return (
    <Form >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required />
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Login
            </Button>
            <Form.Text className="text-danger">
                
            </Form.Text>


            <ButtonGroup size="lg" className="mb-2">
        <Button  className="me-2" variant="outline-primary">Login With Email | <AiOutlineMail></AiOutlineMail>  </Button>
        <Button  onClick={handleGoogleSignIn} className="me-2" variant="outline-warning">Login With Google | <FaGoogle></FaGoogle> </Button>
        <Button className="me-2" variant="outline-dark">Login With Github | <FaGithub></FaGithub></Button>
      </ButtonGroup>
      <br />
        </Form>
   
    
     
   
  );
}

export default Login;