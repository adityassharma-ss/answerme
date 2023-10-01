import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Answer.css';

const Answer = () => {
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000', { prompt: query });
      setAnswer(response.data.bot);
    } catch (err) {
      console.log(err);
    }
    setQuery('');
  }

  const handleClear = () => {
    setQuery('');
    setAnswer('');
  }

  return (
    <div className="answer-container" >
        <div className="query-section">
            <form onSubmit={handleSubmit}>
                <textarea 
                    placeholder="Enter your query here" 
                    className="query-textarea"
                    value={query}
                    
                    onChange={e => setQuery(e.target.value)}
                />
                <div className="submit-clear-section">
                    <button type="submit" className="video-game-button" id='container'>Submit</button>
                    <button className="video-game-button" onClick={handleClear}>Clear</button>
                </div>
            </form>
        </div>
        <div className="conversation-section">
            <div className="conversation-bubble user-bubble">
                <p>{query} </p>
            </div>
            <div className="conversation-bubble bot-bubble">
                <p>{answer}</p>
                <button className="video-game-button" onClick={() => setAnswer('')}>Clear</button>
            </div>
        </div>
    </div>
  );
}

export default Answer;
