import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle , FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

function Login() {
  return (
    <>
      <ButtonGroup size="lg" className="mb-2">
        <Button  className="me-2" variant="outline-primary">Login With Email | <AiOutlineMail></AiOutlineMail>  </Button>
        <Button  className="me-2" variant="outline-warning">Login With Google | <FaGoogle></FaGoogle> </Button>
        <Button className="me-2" variant="outline-dark">Login With Github | <FaGithub></FaGithub></Button>
      </ButtonGroup>
      <br />
     
    </>
  );
}

export default Login;