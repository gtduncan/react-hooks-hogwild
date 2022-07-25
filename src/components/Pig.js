import { useState } from 'react'
import PigDetails from './PigDetails.js'

const Pig = ({name, image, greased, weight, highestMedal}) =>
{
    const [details, showDetails] = useState(false)

    const handlePigClick = () => {
        showDetails(details ? false : true)
        console.log(details)
    }

    return(
    <div id='pig' className='ui card eight wide column' onClick={handlePigClick}>
        <h3 id='name'>{name}</h3>
        <img src={image}/>
        {details ? <PigDetails weight={weight} highestMedal={highestMedal} greased={greased}/> : null}
    </div>
    )
    
}

export default Pig;