
import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import './Header.css'

const Header = () => {
  const {user, logOut} = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
        .then(() => { })
        .catch(error => console.error(error))
}
    return (
        <Navbar collapseOnSelect className="mb-4" expand="lg" bg="dark" variant="dark">
        <Container className='nav-container navContainer'>
         
     
          <Navbar.Brand><Link to='/'>Learn-Tech</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link><Link to='/'>HOME</Link></Nav.Link>
              <Nav.Link><Link to='/courses'>COURSES</Link></Nav.Link>
              <Nav.Link ><Link to='/faq'>FAQ</Link></Nav.Link>
              <Nav.Link ><Link to='/blog'>BLOG</Link></Nav.Link>
             
            </Nav>
            <Nav>
              <Nav.Link href="#deets">

              {
                                user?.uid ?
                                    <>
                                        
                                        <Button variant="light" onClick={handleLogOut}>Log out</Button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login'>Login</Link>
                                        <Link to='/register'>Register</Link>
                                    </>
                            }

              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
              <a data-tip={user?.displayName}>
              {user?.photoURL ?
                             
                              <Image
                                    style={{ height: '30px' }}
                                    roundedCircle
                                    src={user?.photoURL}>
                                </Image>
                                : <FaUser></FaUser>
                                
                            }
</a>
<ReactTooltip place="top" type="dark" effect="float"/>

              </Nav.Link>
            
            </Nav>
          </Navbar.Collapse>
        
        </Container>
      </Navbar>
      
    );
};

export default Header;