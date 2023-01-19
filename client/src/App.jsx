import React from 'react';
import './App.css';

//components
import Headers from './components/Headers';
import Home from './components/Home';
import Answer from './components/Answer';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Home/>
      <Answer/>
      <Footer/>
    </div>
  );
}

export default App;
