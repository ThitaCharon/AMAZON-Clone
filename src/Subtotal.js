import React from "react";
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal} from "./reducer";
import { useHistory } from "react-router-dom";

function Subtotal(){
    const history = useHistory();
    const [{basket}, dispatch] = useStateValue();

    return(<div className="subtotal">
        <CurrencyFormat
            renderText={(value)=> (
                <>
                    <p>
                        {/* HW */}
                        Subtotal ({basket?.length} items):<storng>{value}</storng>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox"/> 
                        This order contains a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType = {"text"}
            thousandSeparato={true}
            prefix={"$"}
        />   

            <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal;