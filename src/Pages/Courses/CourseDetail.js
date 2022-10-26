import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetail = () => {
    const course = useLoaderData();
    return (
        
        <div>
            <h2>Detail page : {course.length}</h2>
        </div>
    );
};

export default CourseDetail;