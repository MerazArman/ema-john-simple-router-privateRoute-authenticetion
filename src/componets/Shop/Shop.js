import React from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';


const Shop = () => {
     //console.log(fakeData)
     const first10 = fakeData.slice(0,10);
     const[products , setProducts] = useState(first10);
     const [cart, setCart] = useState([]);

    const addBtnHandler = (pd) =>{
       // console.log('click' , pd)
        const newCart=[...cart , pd]
        setCart(newCart)
    }
    return (
        <div className='shop-container'>
             <div className="product-container">
               
            {products.map( product => <Products productItem={product} addBtnHandler={addBtnHandler} ></Products> )}
               

              </div>
            <div className="cart-container">
               <Cart cart={cart}> </Cart>
            </div>
        </div>
    );
};

export default Shop;