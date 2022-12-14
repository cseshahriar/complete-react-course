import React from 'react';
import {Button, Card} from "react-bootstrap";

import '../stylesheets/slider.css';

const SliderCardComponent = (props) => {
    const {imgSrc, price, title} = props.data;

    return (
        <Card className="p-0 overflow-hidden h-100 shadow  bg-light">
            <div className="overflow-hidden rounded p-0">
                <Card.Img variant="top" src={imgSrc} />
            </div>
            <Card.Body className="text-center">
                <Card.Title className="display-6">{title}</Card.Title>
                <Card.Title className="display-6">{price}</Card.Title>
            </Card.Body>
            <Button className="w-100 rounded-0" variant="success">Add To Cart</Button>
        </Card>
    );
};

export default SliderCardComponent;