import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import Form from 'react-bootstrap/Form';
import { FaGoogle , FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const [error, setError] = useState('')
  const { providerLogin } = useContext(AuthContext);
  const { signIn, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';
  const googleProvider = new GoogleAuthProvider()

  const handleGoogleSignIn = () => {
      providerLogin(googleProvider)
          .then(result => {
              const user = result.user;
              console.log(user);
          })
          .catch(error => console.error(error))
        }

         
   

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            navigate(from, {replace: true});
        })
        .catch(error => {
          console.error(error)
          setError(error.message);
      })

  }

  return (
    <Form onSubmit={handleSubmit}>
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
            </Button> <br/>
            
            <Form.Text className="text-danger">
                {error}
            </Form.Text>


            <ButtonGroup  size="lg" className="mb-2 mt-5">
       
        <Button  onClick={handleGoogleSignIn} className="me-2" variant="outline-warning">Login With Google | <FaGoogle></FaGoogle> </Button>
        <Button className="me-2" variant="outline-dark">Login With Github | <FaGithub></FaGithub></Button>
      </ButtonGroup>
      <br />
        </Form>
   
    
     
   
  );
}

export default Login;