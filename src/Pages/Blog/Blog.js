import React from 'react';
import '../Shared/Header/Header.css'
const Blog = () => {
    return (
        <div>
            <h2 className='heading'>Blog</h2>  
            <p className='blog-font'>
                Question: what is cors?<br/>
               Answer: CORS is shorthand for Cross-Origin Resource Sharing. It is a mechanism to allow or restrict requested resources on a web server depend on where the HTTP request was initiated. This policy is used to secure a certain web server from access by other website or domain.
            </p>
            <p className='blog-font'>Question: Why are you using firebase? What other options do you have to implement authentication?<br/>
                Answer: Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
            </p>
            <p className='blog-font'>
                Question: How does the private route work?<br/>
                Answer: The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in)

            </p>
            <p className='blog-font'>
                Question: What is Node? How does Node work?<br/>
                Answer: It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.

            </p>
        </div>
    );
};

export default Blog;