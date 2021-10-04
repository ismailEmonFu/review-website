import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import Details from '../Details/Details';

const Admissions = () => {

    const { courseId } = useParams();
    return (
        <div>
            <Details courseId={courseId}></Details>

        </div>
    );
};

export default Admissions;