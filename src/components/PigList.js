import Pig from './Pig.js'


const PigList = ({hogs}) => {

    const pigsMapped = hogs.map((hog) => {
        return <Pig key={hog.name} name={hog.name} image={hog.image} weight={hog.weight} greased={hog.greased} highestMedal = {hog['highest medal achieved']} />
    })

    return(
        <div className="ui four stackable cards">
            {pigsMapped}
        </div> 
    )
}

export default PigList