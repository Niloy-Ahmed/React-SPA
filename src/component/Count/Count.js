import React from 'react';
import './Count.css'

const Count = (props) => {
    const cart = props.cart;
    let total = 0;
    for(let i =0; i<cart.length; i++){
        const product = cart[i];
    total = total + product.price;
}
    return (
        <div className="count">
            <p><b> Total Count: {cart.length} </b></p>
    <p> <b> Yearly Income : {total} </b></p>
        </div>
    );
};

export default Count;