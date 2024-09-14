import { Link } from "react-router-dom";
import "./header.css" 

function Header(){
    return(
        <header>
            <h1 className="titulo">MamacoGames</h1>
            <div className="menu">
                <button className="login">Login</button>
                <button className="cadastrar">Cadastrar</button>
            </div>

        </header>
    )
}

export default Header;
