import React from 'react';
import { useState, useEffect } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';


const Shop = () => {
     //console.log(fakeData)
     const first10 = fakeData.slice(0,10);
     const[products , setProducts] = useState(first10);
     const [cart, setCart] = useState([]);

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

    const addBtnHandler = (pd) =>{
       // console.log('click' , pd)
       const  toBeAddedKey =  pd.key;
       const sameProduct =cart.find(product=>product.key===toBeAddedKey)
       let newCart;
       let  count = 1;
       if (sameProduct) {
           const  count = sameProduct.quantity + 1;
           sameProduct.quantity=count;
           const  others = cart.filter(pd=> pd.key !==  toBeAddedKey)
           newCart = [...others,sameProduct]
       }
       else{
           pd.quantity = 1;
           newCart = [...cart, pd]
       }
        setCart(newCart)
        
        addToDatabaseCart( pd.key,count )
    }
    return (
        <div className='shop-container'>
             <div className="product-container">
               
            {products.map( product => <Products productItem={product} key={product.key} showAddToCart={true} addBtnHandler={addBtnHandler} ></Products> )}
               

              </div>
            <div className="cart-container">
               <Cart cart={cart}> 
               <Link to="/review"><button className="mainButton">Review Order </button></Link>
               </Cart>
            </div>
        </div>
    );
};

export default Shop;