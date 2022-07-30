import flower1 from '../assests/images/png/flower1.png';
import flower2 from '../assests/images/png/flower2.png';
import flower3 from '../assests/images/png/flower3.png';
import flower4 from '../assests/images/png/flower4.png';
import flower5 from '../assests/images/png/flower5.png';
import flower6 from '../assests/images/png/flower6.png';

import Data from './fonctions/cartdetails';

const plantList = [
	{
		name: 'monstera',
		category: 'classique',
		id: '1ed',
		isBestSale: true,
		light: 2,
		water: 3,
		cover: flower1,
		price:400
	},
	{
		name: 'ficus lyrata',
		category: 'classique',
		id: '2ab',
		light: 3,
		water: 1,
		cover: flower2,
		price:350
	},
	{
		name: 'pothos argenté',
		category: 'classique',
		id: '3sd',
		light: 1,
		water: 2,
		cover: flower3,
		price:225
	},
	{
		name: 'yucca',
		category: 'classique',
		id: '4kk',
		light: 3,
		water: 1,
		cover: flower6,
		price:175
	},
	{
		name: 'olivier',
		category: 'extérieur',
		id: '5pl',
		light: 3,
		water: 1,
		cover: flower4,
		price:460,
	},
	{
		name: 'géranium',
		category: 'extérieur',
		id: '6uo',
		light: 2,
		water: 2,
		cover: flower5,
		price:40
	},
	{
		name: 'basilique',
		category: 'extérieur',
		id: '7ie',
		isBestSale: true,
		light: 2,
		water: 3,
		cover: flower4,
		price:350
	},
	{
		name: 'aloe',
		category: 'plante grasse',
		id: '8fp',
		light: 2,
		water: 1,
		cover: flower6,
		price:260
	},
	{
		name: 'succulente',
		category: 'plante grasse',
		id: '9vn',
		light: 2,
		water: 1,
		cover: flower2,
		price:15
	}
]



function ShoppingList({cart,updateCart}){
	
    return (
        <div className="section__products">
            {
				plantList.map((val,i)=>(
					<Data key={i}   img={val.cover} title={val.name} light={val.light} water={val.water} name={val.name} price={val.price} cart={cart} updateCart={updateCart}/>
				))
            }
        </div>
    )
}

export default ShoppingList;