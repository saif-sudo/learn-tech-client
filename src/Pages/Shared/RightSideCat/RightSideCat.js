import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './RightSideCat.css'
const RightSideCat = () => {
    const [categories,setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/courses')
        .then(res => res.json())
        .then(data => setCategories(data));
    },[])
    return (
        <div className='rightside'>
            
            <div>
            <h4>All Categories</h4>
            <div>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/courses/cat/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
        </div>
    );
};

export default RightSideCat;