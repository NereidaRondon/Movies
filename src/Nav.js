import './App.css';

export default function Nav(){
    return(

        <nav>
            <div className="header--bar">
            <a href="https://www.marvel.com/movies" ><img src="https://theculturednerd.org/wp-content/uploads/2020/11/marvel-logo.jpg" width="200"/></a> 
            </div>
            <ul className="nav text-bg-dark nav-justified">
                <li className="nav-item text-center">
                    <a className="nav-link active" aria-current="page" href="#">Active</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled">Disabled</a>
                </li>
            </ul>
        </nav>
    )
}