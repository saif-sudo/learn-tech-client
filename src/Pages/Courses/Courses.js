import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Fooder/Footer';
import Header from '../Shared/Header/Header';
import RightSideCat from '../Shared/RightSideCat/RightSideCat';

const Courses = () => {
    return (
        <div>
       
        <Container>

         <Row>
            <Col lg="10">
                <Outlet></Outlet>
            </Col>
            <Col lg="2">
                <RightSideCat></RightSideCat>
            </Col>

         </Row>

        </Container>
       
      </div>
    );
};

export default Courses;