import React from 'react';
import {useParams} from 'react-router-dom';
import NavBarComponent from "./nav.component";
import FooterComponent from "./footer.component";

import img1 from "../img/product1.jpeg";
import img2 from "../img/product2.jpeg";

const ProductDetailComponent = (props) => {
    const products = [
        {id:1, imgSrc: img1, price: '$10', title: 'Title 1', rating: 4, reviewCount: 12},
        {id:2, imgSrc: img2, price: '$11', title: 'Title 2', rating: 3, reviewCount: 10},
        {id:3, imgSrc: img1, price: '$11', title: 'Title 3', rating: 2, reviewCount: 14},
    ];
    const params = useParams();
    const product = products.find((el) => {
        return el.id == params.id
    });

    return (
        <>
            <NavBarComponent/>
            <div className="container py-5">
                <div className="row">
                    <div className="col mb-5">
                        <h1>{product.title}</h1>
                        <h2 className="mb-3">Price {product.price}</h2>
                        <img src={product.imgSrc} className="img-responsive"/>
                    </div>
                </div>

            </div>
            <FooterComponent/>
        </>
    );
};

export default ProductDetailComponent;