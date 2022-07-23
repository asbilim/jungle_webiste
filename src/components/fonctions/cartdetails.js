import CareScale from "./careScale"
import React from "react"


function Data(props){
    function handleClick(event){
        event.preventDefault()
        console.log(`you asked for ${props.title}`);
    }
    return (
        <div className="card flower-card">
            <img src={props.img} alt={props.name} className="card-img" loading="lazy"></img>
            <div className="pricetitle">
                <h3>{props.title}</h3>
                <div className="card-icons">
                    <CareScale careType='light' scaleValue={props.light} />
                    <CareScale careType='water' scaleValue={props.water} />
                </div>
                <a href="/home" onClick={(e)=>{handleClick(e)}}>shop now ${props.price}</a>
            </div>
        </div>
    )
}

export default Data