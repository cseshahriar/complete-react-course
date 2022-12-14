import React, {Component} from 'react';
import SectionTitleComponent from "./section-title.component";
import ProductCardComponent from "./product-card.component";

import img1 from "../img/product1.jpeg";
import img2 from "../img/product2.jpeg";

class LatestProductsComponents extends Component {


    render() {
        const titleStyle = {
            textAlign: 'left',
        }

        const products = [
            {imgSrc: img1, price: '$10', title: 'Title 1', rating: 4, reviewCount: 12},
            {imgSrc: img2, price: '$11', title: 'Title 2', rating: 3, reviewCount: 10},
            {imgSrc: img1, price: '$11', title: 'Title 3', rating: 2, reviewCount: 14},
        ];

        return (
            <div className="container mb-5">
                <SectionTitleComponent title="Latest Product" titleStyle={titleStyle} />
                <div className="row">
                    {/* single product */}
                    {
                        products.map((product) => {
                           return <div className="col-4 mb-3">
                                <ProductCardComponent
                                    data={
                                        {
                                            imgSrc: product.imgSrc,
                                            price: product.price,
                                            title: product.title,
                                            rating: product.rating, reviewCount: product.reviewCount
                                        }
                                    }
                                />
                            </div>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default LatestProductsComponents;