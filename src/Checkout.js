import React from "react";
import "./Checkout.css"
import "./Subtotal.js";
import Subtotal from "./Subtotal.js";


function Checkout(){
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" 
                    src="https://images-na.ssl-images-amazon.com/images/G/01/marketing/npa/HUB/v2/1921377_npa_hub_header_desktop_v2.png"
                    alt=""/>

                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    {/* BasketItem */}
                    {/* BasketItem */}
                    {/* BasketItem */}
                </div>
            </div>



            <div className="checkout__right">
                {/* <h2>The subtotal will go here</h2> */}
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout