import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function Login() {
  return (
    <>
      <ButtonGroup size="lg" className="mb-2">
        <Button>Email</Button>
        <Button>Google</Button>
        <Button>Github</Button>
      </ButtonGroup>
      <br />
     
    </>
  );
}

export default Login;