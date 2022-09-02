//import React, {useState} from 'react';
import './App.css';
import Stars from './Stars';

export default function Card(){

    return(
        <>
        <div className="card--container">
        <div className="card text-bg-dark ">
            <img className="card-img" src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/theavengers_lob_crd_03.jpg"  alt="Avengers movie poster"/>

            <div className="card-body">
                <h5 className="card-title">Avengers</h5>
                <p className="card-text">Released 2012</p>
                <Stars />
                
            </div>
            <div className="card-body card-area">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        
        <div className="card text-bg-dark ">
            <img className="card-img" src="https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_FMjpg_UX1000_.jpg"/>

            <div className="card-body card-area">
                <h5 className="card-title">Avengers: Infinity War</h5>
                <p className="card-text">Released 2018</p>
                <Stars />
            </div>
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>

        <div className="card text-bg-dark ">
            <img className="card-img" src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"/>

            <div className="card-body card-area">
                <h5 className="card-title">Avengers: End Game</h5>
                <p className="card-text">Released 2019</p>
                <Stars />
                
            </div>
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        </div>

        </>
    );
}