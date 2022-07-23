import {FaSun} from 'react-icons/fa'
import {GiWateringCan} from 'react-icons/gi'

function CareScale({careType,scaleValue}){
    let Type = careType === 'water' ? <GiWateringCan className='water'/> : <FaSun className='sun'/>
    const scaleValues = [1,2,3];
    let valueElem = scaleValue;
    return (
        <div className='waterfire'>
            {
                scaleValues.map((value)=>(
                    valueElem>=value?<span key={`${value.toString()}`}>{Type}</span>:null
                ))
            }
        </div>
    )
}

export default CareScale