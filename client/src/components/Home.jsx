import React, { useRef } from 'react'
import '../styles/Home.css'
import Headers from './Headers';
import Footer from './Footer';
import Answer from './Answer';

const Home = () => {
    const queryBoxRef = useRef(null);

    const handleClick = () => {
        queryBoxRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className="App">
            <Headers />
            <div className="header">
                <h1>AnswerMe</h1>
                <p>Get instant and accurate answers to all your questions</p>
            </div>
            <div className="cta-section">
                <button onClick={handleClick}>Get Started</button>
            </div>
            
        </div>
    );
}

export default Home;
