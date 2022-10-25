import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CourseDetail = () => {
    const [categories,setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/course')
        .then(res => res.json())
        .then(data => setCategories(data));
    },[])
    return (
        <div>
            <h4>Course Details: {categories.length}</h4>
            <div>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/courses/${category.id}}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default CourseDetail;