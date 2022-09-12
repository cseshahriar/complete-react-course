import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/fontawesome-free-solid'
import './Product.css';

const Product = (props) => {
    const {img, name, seller, price, stock} = props.product;

    return (
        <div className="product">
            <div>
                <img className='product-img' src={img} alt={name}/>
            </div>
            <div>
                <h4 className='product-name'>{name}</h4>
                <br/>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock - Order soon</small></p>
                <button className="add-to-cart-btn">  <FontAwesomeIcon icon={faCartPlus} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;