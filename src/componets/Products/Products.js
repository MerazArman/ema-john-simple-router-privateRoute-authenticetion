import React from 'react';
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Products = (props) => {
    //console.log(props);
    const {name,img,seller,price,stock,key } = props.productItem;
    return (
    <div className='pd-item'>

        <div  className='pd-img'>
            <img src={img} alt=""/>
        </div>

             <div className='pd-information'> 
                <h4> <Link to={"/product/"+ key}> {name}</Link> </h4>
                <p> <small><b><i>  By: {seller} </i></b></small></p>
                <p>$ {price}</p>
                <p>only  {stock} pecs  available in market</p>
                { props.showAddToCart && <button className="mainButton" onClick={ ()=> props.addBtnHandler(props.productItem)}> <FontAwesomeIcon icon={faShoppingCart} />  add  to cart  </button>}
             </div>  

    </div>
    );
};

export default Products;