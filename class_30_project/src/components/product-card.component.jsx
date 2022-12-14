import React from 'react';
import {Button, Card} from "react-bootstrap";
import '../stylesheets/product-card.css';
import { useNavigate } from "react-router-dom";

const ProductCardComponent = (props) => {
    const {id, imgSrc, price, title, rating, reviewCount} = props.data;
    const {onClick} = props;
    const totalStar = [1, 2, 3, 4, 5];

    const navigate = useNavigate();

    const showDetails = () => {
        console.log(id);
        navigate(`/products/details/${id}`);
    }

    return (
        <Card className="p-0 overflow-hidden h-100 shadow  bg-light product" onClick={showDetails} >
            <div className="overflow-hidden rounded p-0">
                <Card.Img variant="top" src={imgSrc} />
            </div>
            <Card.Body className="text-center">
                <Card.Title>{title}</Card.Title>
                <Card.Title>
                    {
                        totalStar.map(
                            (i) =>  i <= rating ? <span className="text-warning" key={i}>*</span> : <span className="">*</span>
                        )
                    }
                </Card.Title>
                <Card.Title>{reviewCount} Reviews</Card.Title>
                <Card.Title>{price}</Card.Title>
            </Card.Body>
            <Button className="w-100 rounded-0" variant="success">Add To Cart</Button>
        </Card>
    );
};

export default ProductCardComponent;