import ShoppingList from '../cartList';
function ProductsSection({cart,updateCart}){
    return (
        <div className="section products-section">
            <ShoppingList cart={cart} updateCart={updateCart}/>
        </div>
    )
}

export default ProductsSection;