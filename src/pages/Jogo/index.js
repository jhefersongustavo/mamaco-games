import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import api from "../../services/api"
import { useState, useEffect } from "react";
import "./descricao.css";

function Jogo(){
const {name} = useParams();
    const [jogos, setJogos] = useState({});
    const [loading, setLoading] = useState(true);
    const navegate = useNavigate();
     useEffect(()=>{
        async function loadGame(){
            await api.get(`/games/${name}`,{
                params:{
                    key:"39766f3982024a7c9f424de9c19fa015",
                    
                }
            
            })
            
        
        .then((response)=>{
            setJogos(response.data);
            setLoading(false)
            console.log(response)
        })
        .catch(()=>{
            console.log("Jogo não encontrado");
            navegate("/home", {replace:true})
        })
    }
        loadGame()
     },[name, Navigate])




    return(
        <div className="container-detalhes">
            <article className="detalhes">
                <h2 className="title-name">
                    {jogos.name}
                </h2>
                <div className="column">
                <p className="text-description">
                
                {jogos.description_raw}
                <div className="website">
                <Link to={jogos.website}>{jogos.website}</Link>
                </div>
                
                </p>
                
                <img key={jogos.id} src={jogos.background_image} alt={jogos.name}/>

                </div>

               
                

            </article>



        </div>
    )
}
export default Jogo;
