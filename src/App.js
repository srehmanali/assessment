import React, {useState} from 'react'

import './App.css';

import ListerContainer from './components/lister/ListerContainer'
import SearchBarContainer from './components/searchbar/SearchBarContainer';

function App() {
  //const [data, setCount] = useState("test")

  return (
    <div className="App">
      <div className="main-content">
        <h1>Gist API Assessment</h1>
        <SearchBarContainer />
        <ListerContainer />
      </div>
    </div>
  );
}

export default App;
