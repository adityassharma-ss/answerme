import React from 'react';
import './App.css';

//components
import Headers from './components/Headers';
import Home from './components/Home';
import Answer from './components/Answer';
import About from './components/About';
import Footer from './components/Footer';
import Documentation from './components/Documentation'
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Headers />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/docs' element={<Documentation />} />
          <Route path='/answerme' element={<Answer />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
