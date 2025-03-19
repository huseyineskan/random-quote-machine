import "./App.css";
import React, { useState } from "react";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

const quotes = [
  {
    quote: "The will of man is his happiness.",
    author: "Friedrich Schiller",
    category: "happiness",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "work",
  },
  {
    quote: "The only thing we have to fear is fear itself.",
    author: "Franklin D. Roosevelt",
    category: "fear",
  },
  {
    quote: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates",
    category: "wisdom",
  },
  {
    quote: "The only thing necessary for the triumph of evil",
    author: "Edmund Burke",
    category: "evil",
  },
];

function Quote() {
  const [currentQuote, setCurrentQuote] = useState(
    quotes[Math.floor(Math.random() * quotes.length)]
  );

  function newQuote() {
    setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }

  return (
    <div id="quote-box">
      <p id="text">
        <span>"</span>
        {currentQuote.quote}
      </p>
      <p id="author">- {currentQuote.author}</p>
      <div className="row">
        <div className="socials">
          <a
            id="tweet-quote"
            target="_blank"
            href={`https://twitter.com/intent/tweet?text=${currentQuote.quote} - ${currentQuote.author}`}
          >
            <FaXTwitter />
          </a>
          <a
            id="linkedin-quote"
            target="_blank"
            href={`https://www.linkedin.com/shareArticle?mini=true&text="${currentQuote.quote}" - ${currentQuote.author}`}
          >
            <FaLinkedinIn />
          </a>
        </div>
        <button id="new-quote" onClick={newQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Quote />
      </header>
    </div>
  );
}

export default App;
