import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
//import CardGroup from 'react-bootstrap/CardGroup';
//import { Link } from 'react-router-dom';
import { GrDocumentPdf } from "react-icons/gr";
const CourseFullDetail = () => {
    const courseFullDetail = useLoaderData();
    const {_id,title,author,details,image_url} = courseFullDetail;
   
    return (
        <div>
           <Card className='mb-5 me-5 '>
          <Card.Img variant="top" src={image_url} />
          <Card.Body>
            <Card.Title>{title} <GrDocumentPdf></GrDocumentPdf></Card.Title>
            <Card.Text>
            {
            <p>{details}</p>
          }
            </Card.Text>
          </Card.Body>
          
        </Card>
        </div>
    );
};

export default CourseFullDetail;