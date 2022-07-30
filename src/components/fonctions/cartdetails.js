import CareScale from "./careScale"
import React, {useEffect} from "react"


function Data({cart,updateCart,title,light,name,img,water,price}){
    function manageCart(){
        updateCart(price + cart)
    }
    useEffect(()=>(
        localStorage.setItem("cart", JSON.stringify(cart),[cart])
    ))
    return (
        <div className="card flower-card">
            <img src={img} alt={name} className="card-img" loading="lazy"></img>
            <div className="pricetitle">
                <h3>{title}</h3>
                <div className="card-icons">
                    <CareScale careType='light' scaleValue={light} />
                    <CareScale careType='water' scaleValue={water} />
                </div>
                <a href="#" onClick={()=>{manageCart()}}>shop now ${price}</a>
            </div>
        </div>
    )
}

export default Data;