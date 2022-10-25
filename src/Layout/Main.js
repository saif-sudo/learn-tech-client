import React from 'react';
import {Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Home from '../Pages/Home/Home/Home';
import Footer from '../Pages/Shared/Fooder/Footer';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
    return (
      <div>
        <Header></Header>
        <Container>

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