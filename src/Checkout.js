import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import "./Subtotal.js";
import Subtotal from "./Subtotal.js";


function Checkout(){
    const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" 
                    src="https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/8/AmazonStores/ATVPDKIKX0DER/142342cceb085f4e156d36e54f5438e6.w1200.h675._CR0%2C203%2C1200%2C240_SX1200_.jpg"
                    alt=""/>

                <div>
                    <h3>Hello {!user? 'Guest' : user.email}</h3>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout