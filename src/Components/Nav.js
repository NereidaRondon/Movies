import './App.css';

export default function Nav(){
    return(

        <nav>
            <div className="header--bar">
            <a href="https://www.marvel.com/"  target="_blank"><img className="logo" src="https://theculturednerd.org/wp-content/uploads/2020/11/marvel-logo.jpg" width="200"/></a> 
            </div>
            <ul className="nav text-bg-secondary nav-justified">
                <li className="nav-item">
                    <a className="nav-link" href="https://www.marvel.com/movies" target="_blank" >MARVEL</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://www.imdb.com/list/ls021001839/" target="_blank">TIMELINE</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://www.marvel.com/articles"  target="_blank">NEWS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="https://twitter.com/marvel"  target="_blank">TWITTER</a>
                </li>
            </ul>
        </nav>
    )
}