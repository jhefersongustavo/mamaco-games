import { useState,useEffect } from "react";
import { auth, db } from "../../firebaseConnections";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Cadastro(){
    const [email, setEmail] = useState("");
    const[senha, setSenha] = useState("");
    const [nome, setNome] = useState('');
    const [user, setUser] = useState(false);
    const [userDetail, setUserDetail] = useState({})
    const navigate = useNavigate();



 

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

    async function novoUsuario(){
        await createUserWithEmailAndPassword(auth, email, senha,nome)
        .then(()=>{
            alert("usuario cadastrado com sucesso")
            setEmail("")
            setSenha("")
        })
        .catch((error)=>{
            if(error.code ==='auth,weak-password'){
                alert("Digite uma senha forte")
            }else if(error.code === 'auth/email-alredy-in-use'){
                alert("email ja existe")
            }else{
                alert("Digite um email e uma senha")
            }
        })
    }


    async function logarUsuario(){
        await signInWithEmailAndPassword(auth,email,senha)
        .then((value)=>{
            setUserDetail({
                uid: value.user.uid,
                email:value.user.email,
            })
            navigate('/');
            
            setUser(true)
            setEmail('')
            setSenha('')
        })
        .catch((error)=>{
            if(error.code === "auth/invalid-credential"){
                alert("Email ou senha incorreta")
            }else{
                alert("Digite seu email e sua senha")
            }
        })

    }
    async function fazerLogout(){
        await signOut(auth)
        setUser(false)
        setUserDetail({})
    }
    
    return(
        <div className="container">
            	<div className="imagem">
                    <img src="https://i.pinimg.com/564x/fc/31/ba/fc31ba76a2b5caf8336f909301dffaef.jpg"/>
                </div>
                <div className="cadastro">
            <Link to='/home'><h2>Faça seu cadastro/login</h2></Link>
            <label>Email</label>
            <input value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Digite seu email" required/>
            <label>senha</label>
            <input value={senha} onChange={(e)=>setSenha(e.target.value)} placeholder="DIgite sua senha"/> <br/>
            <button onClick={novoUsuario}>Cadastrar</button> <br/>
            <button onClick={logarUsuario}>fazer login</button>

                </div>

            
        </div>
    )

}





export default Cadastro;