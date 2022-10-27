import React from 'react';
import {Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Fooder/Footer';
import Header from '../Pages/Shared/Header/Header';
import './Main.css'
const Main = () => {
    return (
      <div>
        <Header></Header>
        <Container className='body'>

         <Row>
            <Col>
                <Outlet></Outlet>
            </Col>

         </Row>

        </Container>
        <Footer></Footer>
      </div>
    );
};

export default Main;