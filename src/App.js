import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
// import Movies from './components/Movies/Movies';
import Body from './components/Body/Body';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Body />
    </div>
  );
}

export default App;
