import {useState} from 'react'

const FilterButtons = ({setOnlyGrease, onlyGrease, setCurrentSort, currentSort}) =>
{
    const handleClick = () =>
    {
        setOnlyGrease(!onlyGrease)
    }

    return(<div>
            <button onClick={handleClick}>Filter by Grease</button>
            <p></p>
            <label>
                Sort by...
                <select>
                    <option value='Name' onChange={(e) => setCurrentSort(e.target.value)}>Name</option>
                    <option value='Weight' onChange={(e) => setCurrentSort(e.target.value)}>Weight</option>
                </select>
            </label>
            <p></p>
        </div>)
}

export default FilterButtons