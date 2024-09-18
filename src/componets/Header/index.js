import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./header.css" 
import { auth } from "../../firebaseConnections";
import {signOut, onAuthStateChanged } from "firebase/auth";

function Header(){
    const [user, setUser] = useState(false);
    const [userDetail, setUserDetail] = useState({})
    const navigate = useNavigate()
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
        setUserDetail((navigate('/')))
    }
    return(
        <header>
            <Link to='/home'> <h1 className="titulo">MamacoGames</h1></Link>
            <div className="menu">
            <button onClick={fazerLogout}>sair</button>
                
            </div>

        </header>
    )
}

export default Header;
