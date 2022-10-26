import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../Shared/CourseSummaryCard/CourseSummaryCard';

const CoursesCat = () => {
    const coursecat = useLoaderData();
    return (
        <div>
        <h2>This Course has: {coursecat.length} </h2>
        {
             coursecat.map(course => <CourseSummaryCard
                key={course._id}
                course={course}
             ></CourseSummaryCard>)
        }
       
        
     </div>
    );
};

export default CoursesCat;