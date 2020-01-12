import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> My token = {window.token} </p>
        <p>Go to <a
          className="App-link"
          href="https://iwdevelop.com"
          target="_blank"
          rel="noopener noreferrer"
        >IW Develop</a></p>
      </header>
    </div>
  );
}

export default App;
