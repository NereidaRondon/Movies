import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav from './Components/Nav';
import App from './Components/App';
//import Counter from './Counter';
import Card from './Components/Card'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Nav />
    <App />
    <Card />
  </>
);


