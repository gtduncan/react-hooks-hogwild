import React from "react";
import Nav from "./Nav";
import PigList from "./PigList"
import FilterButtons from './FilterButtons.js'
import {useState} from 'react'

import hogs from "../porkers_data";
import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";

function App() {

	const [onlyGrease, setOnlyGrease] = useState(false)
	const [currentSort, setCurrentSort] = useState('Name')

	const pigsToDisplay = hogs.filter((hog) => {
		if(onlyGrease)
		{
			if(hog.greased===true) 
			{
			return true;
			}
			else
			{
			return false;
			}
		} else {
			return true;
		}
		
    })
	
	const sortedPigs = pigsToDisplay.sort((hog1, hog2) =>
	{
		if(currentSort==="weight")
		{
			return hog1.weight-hog2.weight
		}
		else {
			return hog1.name.localeCompare(hog2.name);
		  }
	})


	return (
		<div className="App">
			<Nav />
			<FilterButtons onlyGrease={onlyGrease} setOnlyGrease={setOnlyGrease}/>
			<PigList hogs={sortedPigs} onlyGrease={onlyGrease}/>
		</div>
	);
}

export default App;
