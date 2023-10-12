import React, { useState } from "react";
import axios from "axios";
import "../styles/Answer.css";

const Answer = () => {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000", {
        prompt: query,
      });
      setAnswer(response.data.bot);
    } catch (err) {
      console.log(err);
    }
    setQuery("");
  };

  const handleClear = () => {
    setQuery("");
    setAnswer("");
  };

  return (
    <div className="answer-container">
      <div className="query-section">
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Enter your query here"
            className="query-textarea"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="submit-clear-section">
            <button class="btn-sumbit">
              <svg
                height="24"
                width="24"
                fill="#FFFFFF"
                viewBox="0 0 24 24"
                data-name="Layer 1"
                id="Layer_1"
                class="sparkle"
              >
                <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
              </svg>

              <span class="text">Submit</span>
            </button>
            <button className="btn-clear" onClick={handleClear}>
              <span>Clear</span>
            </button>
          </div>
        </form>
      </div>
      <div className="conversation-section">
        <div className="conversation-bubble user-bubble">
          <p>{query} </p>
        </div>
        <div className="conversation-bubble bot-bubble">
          <p>{answer}</p>
          <button className="btn-clear" onClick={() => setAnswer("")}>
            <span>Clear</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Answer;
