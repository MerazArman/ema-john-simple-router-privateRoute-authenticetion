import React, { useState, useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';

const Review = () => {
    const  [cart,setCart]=  useState([]);

    const  removeProduct=(productKey)=>{
        //console.log("remove",productKey)
        const newCart =cart.filter(pd=> pd.key !== productKey);
        setCart(newCart)
        removeFromDatabaseCart(productKey)
    }
    useEffect(()=>{
        const  savedCart = getDatabaseCart()
        const productKey = Object.keys(savedCart)

        const cartProduct = productKey.map(key=>{
            const products =  fakeData.find(pd=> pd.key===key);
            products.quantity=savedCart[key]
            return  products;
        })
        setCart(cartProduct)
    },[])
    return (
    <div className='shop-container'>
        <div className="product-container">
          <h1> Cart Item:{cart.length}</h1>
          {
            cart.map(pd=> <ReviewItem removeProduct={removeProduct} product={pd} key={pd.key}>  </ReviewItem>)
          }
        </div>

        <div className="cart-container">
            <Cart></Cart>
        </div>
    </div>
    );
};

export default Review;