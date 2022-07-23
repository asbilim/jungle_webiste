import Cart from "./cart";
function Recomendations(){
    let currentMonth = new Date().getMonth();
    let cannot = <p className="suggestion">Ce n'est pas le moment de <span>repoter</span></p> 
    if (currentMonth > 2 && currentMonth <= 5){
        let cantake = <p className="suggestion">C'est le moment de <span>repoter</span></p> 
        return (<div className="suggestions">{cantake}<Cart/></div>)
    }
    return (<div className="suggestions">{cannot}<Cart/></div>)
}

export default Recomendations;