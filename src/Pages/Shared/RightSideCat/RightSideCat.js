import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RightSideCat = () => {
    const [categories,setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/courses')
        .then(res => res.json())
        .then(data => setCategories(data));
    },[])
    return (
        <div>
            <h2>Right side demo</h2>
            <div>
            <h4>All Category: {categories.length}</h4>
            <div>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/courses/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
        </div>
    );
};

export default RightSideCat;