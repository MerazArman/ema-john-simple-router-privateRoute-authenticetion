import React from 'react';

const ReviewItem = (props) => {
    const {name,quantity,key}=props.product;
    const  reviewItemStyle ={
        borderBottom:"1px  solid lightgray",
        marginBottom:"5px",
        marginLeft:"3px",
        padding:"10px"
    }
    return (
        <div  style={reviewItemStyle}>
            <h3> {name}</h3>
            <h5>Quantity:{quantity}</h5>
            <br/>
            <button onClick={()=> props.removeProduct(key)} className="mainButton">Remove Item</button>
        </div>
    );
};

export default ReviewItem;