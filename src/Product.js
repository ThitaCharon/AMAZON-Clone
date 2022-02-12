import React from "react";
import './Product.css';

function Product({title, price, image, rating}){
    const addToBasket = () => {
        // dispatch the item into the data
    }
    return(
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="produce__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_,i)=>(<p>⭐</p>))}
                </div>

                <img 
                    src={image}
                    alt=""
                />

                <button onClick={addToBasket}>Add to Basket</button>
            </div>
    
        </div>
    )
}

export default Product