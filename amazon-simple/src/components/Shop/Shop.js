import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';


const Shop = () => {
    const firstTenProducts = fakeData.slice(0, 15);
    // state
    const [products, setProducts] = useState(firstTenProducts);

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product product={product} key={product.key}></Product>)
                }
            </div>
            
            <div className="cart-container">
                <h3>this is cart</h3>
            </div>
        </div>

    );
};

export default Shop;