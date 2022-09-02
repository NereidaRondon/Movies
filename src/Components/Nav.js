import './App.css';

export default function Nav(){
    return(

        <nav>
            <div className="header--bar">
            <a href="https://www.marvel.com/" ><img className="logo" src="https://theculturednerd.org/wp-content/uploads/2020/11/marvel-logo.jpg" width="200"/></a> 
            </div>
            <ul className="nav text-bg-secondary nav-justified">
                <li className="nav-item">
                    <a className="nav-link" href="https://www.marvel.com/movies">MARVEL</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://www.imdb.com/list/ls021001839/">TIMELINE</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://www.marvel.com/articles">NEWS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="https://twitter.com/marvel">TWITTER</a>
                </li>
            </ul>
            <div className="hero">
                <div className="hero--container">
                    <h1 className="hero--title">MCU Movie Reviews</h1>
                    <p className="hero--par">Checkout all of the movie titles from the MCU since phase one.</p> 
                    <p className="hero--par">Rate your favorites and not so favorites.</p>    
                </div>
                <div>
                    <img className="hero--img" src="https://img5.goodfon.com/wallpaper/nbig/6/2f/mstiteli-voina-beskonechnosti-avengers-infinity-war-komiks-1.jpg"></img>
                </div>
            </div>
        </nav>
    )
}