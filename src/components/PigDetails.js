const PigDetails = ({weight, highestMedal, greased}) =>
{
    return(
        <div>
    <p>Greased: {greased ? 'Yes' : 'No'}</p>
    <p>Weight: {weight}</p>
    <p>Highest Medal: {highestMedal}</p>
        </div>)
}
    

export default PigDetails