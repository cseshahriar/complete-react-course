import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';


const Shop = () => {
    const firstTenProducts = fakeData.slice(0, 10);
    // state
    const [products, setProducts] = useState(firstTenProducts);

    return (
        <div className="shop-container">
            <div className="product-container">
                <ul>
                    {
                        products.map(product => <li>{product.name}</li>)
                    }
                </ul>
            </div>
            
            <div className="cart-container">
                <h3>this is cart</h3>
            </div>
        </div>

    );
};

export default Shop;