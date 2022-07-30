import Cart from "./cart";
function Recomendations({cart,updateCart}){
    let currentMonth = new Date().getMonth();
    let cannot = <p className="suggestion">Ce n'est pas le moment de <span>repoter</span></p> 
    if (currentMonth > 2 && currentMonth <= 5){
        let cantake = <p className="suggestion">C'est le moment de <span>repoter</span></p> 
        return (<div className="suggestions">{cantake}<Cart  cartValue={cart} updateCart={updateCart}/></div>)
    }
    return (<div className="suggestions">{cannot}<Cart cartValue={cart} updateCart={updateCart}/></div>)
}

export default Recomendations;