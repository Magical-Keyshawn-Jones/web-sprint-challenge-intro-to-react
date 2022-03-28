import React, { useState, useEffect} from 'react';
import axios from 'axios';
import People from './components/Character';
import { people } from './components/Character';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [starWars, setStarWars] = useState([])

  useEffect (() => {
    axios.get('https://swapi.dev/api/people/')
    .then(Object => setStarWars(Object.data))
    .catch(err => console.log('error',err))
  }, [])

console.log(starWars)


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {/* {starWars.map(item => people(item))} */}
      {starWars.map(item => <People name={item.name}/>)}
    </div>
  );
}



export default App;
