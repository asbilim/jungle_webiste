import ProductsSection from './sections/products'
import Recomendations from './fonctions/recommendations';

function Main(){
    return (
        <div className="main">
            <Recomendations/>
            <ProductsSection/>
        </div>
    )
}

export default Main;