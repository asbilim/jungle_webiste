import ProductsSection from './sections/products'
import Recomendations from './fonctions/recommendations';

function Main({cart,updateCart}){
    return (
        <div className="main">
            <Recomendations cart={cart} updateCart={updateCart}/>
            <ProductsSection cart={cart} updateCart={updateCart}/>
        </div>
    )
}

export default Main;