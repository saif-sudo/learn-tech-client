import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../Shared/CourseSummaryCard/CourseSummaryCard';

const CourseDetail = () => {
    const allcourse = useLoaderData();
    return (
        
        <div>
            <h2>Detail page : {allcourse.length}</h2>
            {
                allcourse.map(course => <CourseSummaryCard
                key={course._id}
                course={course}
                ></CourseSummaryCard>)
            }
        </div>
    );
};

export default CourseDetail;