import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Products from '../Products/Products';

const ProductDetails = () => {
    const {productKey}  = useParams();
    const  product  = fakeData.find(pd => pd.key === productKey);
    console.log(product)
    return (
        <div>
            <h2> {productKey} details cumming soon</h2>
            <Products productItem={product}></Products>
        </div>
    );
};

export default ProductDetails;