import React from "react";
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";

function Subtotal(){
    return(<div className="subtotal">
        <CurrencyFormat
            renderText={(value)=> (
                <>
                    <p>
                        {/* HW */}
                        Subtotal (0 items):<storng>0</storng>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox"/> 
                        This order contains a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={0} //TODO
            displayType = {"text"}
            thousandSeparato={true}
            prefix={"$"}
        />   

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal;