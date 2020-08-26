import React from 'react';

const Cart = (props) => {
    const cartList = props.cart;
    console.log(cartList)
    //const totalPrice = cartList.reduce((totalPrice, pdPrice) => totalPrice+pdPrice.price ,0)
    let price = 0;
    let shippingPrice =0
    for (let i = 0; i < cartList.length; i++) {
        const pd  = cartList[i];
        price = price + pd.price;
        shippingPrice = shippingPrice + pd.shipping;
    }
    let tax = (price/80)

    const  mathFormatter = num  => {
        const stringToNumber = num.toFixed(2)
        return Number(stringToNumber);
    }
    
    return (
        <div>
        <h3> Order  summary</h3>
        <h4> Ordared Items {cartList.length} </h4>
        <h5> price {mathFormatter(price) }</h5>
        <p> shipping : {shippingPrice}</p>
        <p>VAT+ TAX: {mathFormatter(tax) }</p>
        <p> <b>Total Price {mathFormatter(price+shippingPrice+tax) } </b></p>
        </div>
    );
};

export default Cart;