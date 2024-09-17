import { Link } from "react-router-dom";
import "./header.css" 

function Header(){
    return(
        <header>
            <Link to='/home'> <h1 className="titulo">MamacoGames</h1></Link>
            <div className="menu">
                <Link to='/cadastro'><button className="login">Login</button></Link>
                
                
            </div>

        </header>
    )
}

export default Header;
