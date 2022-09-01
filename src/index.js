import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav from './Nav';
import App from './App';
import Counter from './Counter';
import Card from './Card'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Nav />
    <App />
    <Counter />
    <Card />
  </>
);


