import React from 'react';
import axios from 'axios';
import People from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  axios.get('https://swapi.dev/api/people/')
.then(object => console.log(object))
.catch(err => console.log('error',err))

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <People/>
    </div>
  );
}

export default App;
