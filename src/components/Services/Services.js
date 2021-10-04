import React, { useEffect, useState } from 'react';
import CourseCard from '../CourseCard/CourseCard';
import Footer from '../Footer/Footer';
import './Services.css';
import Header from '../Header/Header';

const Services = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <>

            <div className="course-card justify-content-center">
                {
                    courses.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
                }
            </div>

        </>
    );
};

export default Services
