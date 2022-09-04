//import React, {useState} from 'react';
import './App.css';
import Stars from './Stars';

export default function Movie(props){
    
    return(
            <div className="card text-bg-dark ">
                <img className="card-img" src={props.movie.img} alt={props.movie.title} movie poster/>

                <div className="card-body">
                    <h5 className="card-title">{props.movie.title}</h5>
                    <p className="card-text">Released {props.movie.year}</p>
                    <Stars /> 
                    <details>
                        <summary>Synopsis</summary>
                        <p className="card-text">{props.movie.info}</p>
                    </details>
                </div>
            </div>   
      
        
    );
}