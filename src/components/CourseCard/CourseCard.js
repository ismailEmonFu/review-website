import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CourseCard = (props) => {
    const { id, name, img, title, price } = props.course;
    return (
        <>
            <div className="course-card col-md-12 m-5 d-flex justify-content-center">
                <Card className="border border-info rounded-100" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{title}
                        </Card.Text>
                        <Link to={`/admissions/${id}`}>
                            <Button variant="primary"> Details</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
};

export default CourseCard;