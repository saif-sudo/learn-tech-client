import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle , FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

function Login() {
  return (
    <>
      <ButtonGroup size="lg" className="mb-2">
        <Button variant="outline-primary">Login With Email | <AiOutlineMail></AiOutlineMail>  </Button>
        <Button variant="outline-warning">Login With Google | <FaGoogle></FaGoogle> </Button>
        <Button variant="outline-dark">Login With Github | <FaGithub></FaGithub></Button>
      </ButtonGroup>
      <br />
     
    </>
  );
}

export default Login;