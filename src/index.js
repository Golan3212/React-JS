import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Message from './Message'

const name = 'Golan4eg'
const message = "Hi! This is my first homework!"

ReactDOM.render(
  <React.StrictMode>
    <App myName = {name} />
    <Message myMessage = {message} />
  </React.StrictMode>,
  document.getElementById('root')
);


