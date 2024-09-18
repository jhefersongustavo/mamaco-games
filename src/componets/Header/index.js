import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./header.css" 
import { auth } from "../../firebaseConnections";
import {signOut, onAuthStateChanged } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth/web-extension";

function Header(){
    const [user, setUser] = useState(false);
    const [userDetail, setUserDetail] = useState({})
    useEffect(()=>{
        async function checkLogin(){
            onAuthStateChanged(auth,(user)=>{
                if (user){
                    setUser(true);
                    setUserDetail({
                        uid:user.nome,
                        email:user.email
                    })}else{
                        setUser(false);
                        setUserDetail({})
                }
            })
        }
            checkLogin()
    },[])
    async function fazerLogout(){
        await signOut(auth)
        setUser(false)
        setUserDetail({})
    }
    return(
        <header>
            <Link to='/home'> <h1 className="titulo">MamacoGames</h1></Link>
            <div className="menu">
                <Link to='/'><button>sair</button></Link>
                
            </div>

        </header>
    )
}

export default Header;
