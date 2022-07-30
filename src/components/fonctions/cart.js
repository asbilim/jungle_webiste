import React from "react"
import {useState,useEffect} from "react"
function Cart({cartValue}){

    const [isOpen , setStatus] = useState((isOpen)=>isOpen)
    return isOpen ? (
        <React.Fragment>
            <button className="cart-button">Open Cart</button>
            <div className="cart">
                <h2>Total :  $ <span id="price">{cartValue}</span></h2>
                <br/>
                <button className="cart-button" onClick={()=>setStatus(false)}>Close Cart</button>
            </div>
        </React.Fragment>
    ):(
        <React.Fragment>
            <button className="cart-button" onClick={()=>setStatus(true)}>Open Cart</button>
        </React.Fragment>
    )

}

export default Cart