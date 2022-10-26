import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CoursesCat = () => {
    const course = useLoaderData();
    return (
        <div>
        <h2>This Course has: {course.length} </h2>
        
     </div>
    );
};

export default CoursesCat;