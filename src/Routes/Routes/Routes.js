
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";

import Courses from "../../Pages/Courses/Courses";
import CoursesCat from "../../Pages/Courses/CoursesCat";

import Faq from "../../Pages/Faq/Faq";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import CourseDetail from "../../Pages/Courses/CourseDetail";
import CourseFullDetail from "../../Pages/Courses/CourseFullDetail";
//import RightSideCat from "../../Pages/Shared/RightSideCat/RightSideCat";

export const routes = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children:[
            {
            path: '/',
        element: <Home></Home>
            },
            {
                path: '/courses',
            element: <Courses></Courses>,
           
                children:[
                    {
                        path: '/courses',
                    element: <CourseDetail></CourseDetail>,
                    loader: () => fetch(`http://localhost:5000/courses/cat/`),
                    
                        },
                  
                        {
                            path: '/courses/cat/:id',
                        element: <CoursesCat></CoursesCat>,
                        loader: ({params}) => fetch(`http://localhost:5000/courses/cat/${params.id}`)
                            },
                            {
                                path: '/courses/:id',
                            element: <CourseFullDetail></CourseFullDetail>,
                            loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`)
                                },
                ]
            },
            {
                path: '/faq',
            element: <Faq></Faq>
            },
            {
                path: '/blog',
            element: <Home></Home>
            },
            {
                path: '/login',
            element: <Login></Login>
            }  
        ]
    }
])