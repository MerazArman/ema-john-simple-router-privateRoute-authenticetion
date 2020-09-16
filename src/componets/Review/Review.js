import React, { useState, useEffect } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const  [cart,setCart]=  useState([]);

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
        <div>
        <h1> Cart Item:{cart.length}</h1>
        {
            cart.map(pd=> <ReviewItem  product={pd} key={pd.key}>  </ReviewItem>)
        }
        </div>
    );
};

export default Review;