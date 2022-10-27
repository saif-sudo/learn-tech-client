import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../Shared/CourseSummaryCard/CourseSummaryCard';

const CoursesCat = () => {
    const coursecat = useLoaderData();
    return (
        <div>
      
        <Container>
      <Row>
        {
             coursecat.map(course => <Col md={4}><CourseSummaryCard
                key={course._id}
                course={course}
             ></CourseSummaryCard></Col>)
        }
       
       </Row>
    </Container>
     </div>
    );
};

export default CoursesCat;