import "./App.css";
import React, { useEffect, useState } from "react";
import { MdFormatQuote } from "react-icons/md";
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
  const [color, setColor] = useState("");

  function newQuote() {
    setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    newColor();
  }

  function newColor() {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
    console.log(randomColor);
  }

  useEffect(() => {
    newColor();
    document.body.style.backgroundColor = "green";
    return () => {
      document.body.style.backgroundColor = "transparent";
    };
  }, []);

  return (
    <div className="App">
      <header
        className="App-header"
        style={{ backgroundColor: color, transition: "all 0.5s" }}
      >
        <div id="quote-box">
          <p id="text">
            <MdFormatQuote />
            {currentQuote.quote}
            <MdFormatQuote />
          </p>
          <p id="author">- {currentQuote.author}</p>
          <div className="row">
            <div className="socials">
              <a
                id="tweet-quote"
                target="_blank"
                rel="noreferrer"
                href={`https://twitter.com/intent/tweet?text=${currentQuote.quote} - ${currentQuote.author}`}
              >
                <FaXTwitter style={{ color: color }} />
              </a>
              <a
                id="linkedin-quote"
                target="_blank"
                rel="noreferrer"
                href={`https://www.linkedin.com/shareArticle?mini=true&text="${currentQuote.quote}" - ${currentQuote.author}`}
              >
                <FaLinkedinIn style={{ color: color }} />
              </a>
            </div>
            <button
              id="new-quote"
              style={{ backgroundColor: color, transition: "all 0.5s" }}
              onClick={newQuote}
            >
              New Quote
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

function App() {
  return <Quote />;
}

export default App;
