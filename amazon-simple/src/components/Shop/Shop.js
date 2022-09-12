import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';


const Shop = () => {
    const firstTenProducts = fakeData.slice(0, 15);
    // state
    const [products, setProducts] = useState(firstTenProducts);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        console.log('product added', product);
        const newCart = [...cart, product]; // old products and mew
        setCart(newCart);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product 
                        product={product}
                        key={product.key}
                        handleAddProduct={handleAddProduct}
                        ></Product>)
                }
            </div>
            
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>

    );
};

export default Shop;