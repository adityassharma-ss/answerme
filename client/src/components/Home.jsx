import React, { useRef } from 'react'
import '../styles/Home.css'
import Headers from './Headers';
import Footer from './Footer';
import Answer from './Answer';
import { Link } from 'react-router-dom';

const Home = () => {
    const queryBoxRef = useRef(null);

    const handleClick = () => {
        queryBoxRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    return (
        <div className="App">
            <Headers />
            <div className="header">
            <h1><span class="magic"><span class="magic-text">Answer Me</span></span></h1>
            <h2>Get <span class="highlight tilt">instant</span> and <span class="highlight tilt">accurate</span> answers to all your questions</h2>

            </div>
            <div className="cta-section">
              <Link to="/answerme">  <a href="Answer.jsx#container"><button onClick={handleClick} className='video-game-button'>Get Started</button></a></Link>
                
            </div>
            
        </div>
    );
}

export default Home;
