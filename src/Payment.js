import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import CheckoutProduct from "./CheckoutProduct";
import './Payment.css';
import { useStateValue } from "./StateProvider";

function Payment(){
    const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>Checkout (
                    <Link to='/Checkout'>
                        {basket?.length} items
                    </Link>) </h1>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>213 React Ave.</p>
                        <p>Long Island, NY</p>
                    </div>
                </div>


                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
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


                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                        <div className="payment__detail">
                            {/* magic payment */}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Payment