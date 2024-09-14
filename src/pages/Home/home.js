import { useEffect,useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import { format } from "date-fns/format";
import "./home.css";



function Home(){
        const [game, setGames] = useState([]);
        const [loading, setLoading] = useState(true);
        
        useEffect(()=>{
            async function loadGame(){
                const response = await api.get("/games",{
                    params:{
                        key:"39766f3982024a7c9f424de9c19fa015",
                        dates:"2024-09-13,2024-12-31",
                        page_size: 6
                    },
                    
                });
                
                
                setLoading(false);
                setGames(response.data.results.slice(0,6))
            }
            loadGame()
        },[])
        if (loading){
            return(
                <div className="loading"><h1>carregando</h1></div>
            )
        }
       

return(
    
    <div className="container">
        <div className="games">
            <article className="home">
                <div>
                <h1>Bem vindo ao MamacoGames</h1>
                <p>Aqui você vai encontrar varios tipos de analises de jogos ,<br/> avaliações e os lançamentos de jogos que estão em alta <br/> fique a vontade para explorar!!!<br/> Faça seu cadastro em nosso site !!! </p>
                <button className="button-cadastro">Cadastre-se aqui</button>
                </div>
            </article>

            <div className="lista-games">
            <h2>Jogos que vão lançar :</h2>
                    <div className="games-grid">
                    {game.map((games)=>{ 
                        const formatDate = format(new Date(games.released),"dd/MM/yyyy")
                    return(
                    <article key={games.id} className="game-item">
                        <p className="name">{games.name}</p>
                       
                        <div className="listas">
                            <div className="container-img">
                              <img src={games.background_image}/>
                               <span className="released">{`Data de lançamento: ${formatDate}`}</span> 
                                <ul className="list">
                                <p className="title-list">Plataformas Disponiveis:</p>
                                {games.platforms.map(platform =>(
                                <li key={games.platforms.id} className="list-platform">
                                    {platform.platform.name}
                                </li>
                            ))}
                        </ul>

                            </div>
                        

                        
                        </div>
                    
                    </article>

                        )})}

                    </div>

                    
                        
                
                    

               
            </div>
            
        
        </div>
        
    </div>
)}

export default Home;