import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';
import { GrDocumentPdf } from "react-icons/gr";
const CourseSummaryCard = ({course}) => {
    const {_id,title,author,details,image_url} = course;
    return (
        <CardGroup>
        <Card className='mb-5 me-5 '>
          <Card.Img variant="top" src={image_url} />
          <Card.Body>
            <Card.Title>{title} <GrDocumentPdf></GrDocumentPdf></Card.Title>
            <Card.Text>
            {
            details.length > 200 ?
            <p>{details.slice(0,250) + '...'}<Link to={`/courses/${_id}`}>Read More</Link></p>
            :
            <p>{details}</p>
          }
            </Card.Text>
          </Card.Body>
          
        </Card>
       
      </CardGroup>






       
       
    );
};

export default CourseSummaryCard;