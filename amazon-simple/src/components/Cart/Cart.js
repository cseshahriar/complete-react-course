import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, product) => total + product.price, 0);

    let shipping = 0;
    if(totalPrice > 35) {
        shipping = 0;
    }
    else if(totalPrice > 15) {
        shipping = 4.99;
    } else if(totalPrice > 0) {
        shipping = 12.99;
    }

    const tax = Math.round(totalPrice / 10); 
    // const tax = (totalPrice / 10).toFixed(2); 
    const grandTotal = (totalPrice + shipping + Number(tax)).toFixed(2); 
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h4>Order Summery</h4>
            <p>Items Ordered: {cart.length} </p>
            <p> Shipping Cost : <small>{shipping}</small></p>
            <p> Tax : <small>{tax}</small></p>
            <p>Total Price: ${ grandTotal }</p>
        </div>
    );
};

export default Cart;