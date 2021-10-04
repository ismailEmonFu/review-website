import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Details = (props) => {
    const { courseId } = props;
    // console.log(courseId);

    const [courseList, setCourseList] = useState([]);

    useEffect(() => fetch('/courses.JSON')
        .then(res => res.json())
        .then(data => setCourseList(data)), []);

    // console.log(courseList);
    // courseList.map(course => course.id == courseId ? console.log("Found") : console.log("Not Found"));
    console.log(courseList);
    const foundcourse = courseList.find(course => course.id == courseId);
    console.log(foundcourse);

    return (
        <div className="course-card col-md-12 m-5 d-flex justify-content-center" >
            <Card className="border border-danger" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={foundcourse?.img} />
                <Card.Body>
                    <Card.Title>{foundcourse?.name}</Card.Title>
                    <Card.Text>
                        {foundcourse?.title}
                    </Card.Text>
                    <Card.Text>
                        Course Fee: {foundcourse?.price}$
                    </Card.Text>
                    <Link to="/home">
                        <Button variant="primary">Home</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div >
    );
};

export default Details;