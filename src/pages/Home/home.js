import { useEffect,useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import { format } from "date-fns/format";
import "./home.css";



function Home(){
        const [game, setGames] = useState([]);
        const [loading, setLoading] = useState(true);
        const [popularGames, setPopularGames] = useState([]);
        const [setid, setId] = useState('')
        
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
                const popularResponse = await api.get("/games",{
                    params:{
                        key:"39766f3982024a7c9f424de9c19fa015",
                        odering: "-popularity",
                        page_size: 6
                    }
                });
                setPopularGames(popularResponse.data.results.slice(0.6))
                
            }
            loadGame()
        
        },[])
        if (loading){
            return(
                <div className="loading"><h1>carregando, aguarde...</h1></div>
            )
        }
       

return(
    
    <div className="container">
        <div className="games">
            <article className="home">
                <div>
                <h1>Bem vindo ao MamacoGames</h1>
                <p>Aqui você vai encontrar varios tipo de games<br/> avaliações e os lançamentos de jogos que estão em alta <br/> fique a vontade para explorar!!!<br/> </p>
                </div>
            </article>
            <div className="lista-games">
            <h2>Jogos que vão lançar </h2>
                    <div className="games-grid">
                    {game.map((games)=>{ 
                        const formatDate = format(new Date(games.released),"dd/MM/yyyy")
                    return(
                    <article key={games.id} className="game-item">
                        <div className="name-title">
                        <Link to={`/jogos/${games.id}`}><span>{games.name}</span></Link>
                        </div>
                        <div className="listas">
                            <div className="container-img">
                             <span className="released">{`Data de lançamento: ${formatDate}`}</span> 
                             <img src={games.background_image} alt={games.name} />
                              
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
                        <div className="lista-games">
                            <h2>Jogos populares</h2>
                        </div>
                <div className="games-grid">
                    {popularGames.map((popularGame)=>{
                        const date = format(new Date(popularGame.released), "dd/MM/yyyy")
                        return(
                        <article key={popularGame.name} className="game-item">
                            <div className="name-title">
                             <Link to={`/jogos/${popularGame.id}`} > <span>{popularGame.name}</span></Link>
                            </div>
                            <div className="listas">
                            <div className="container-img">
                                <span className="released"> {`Data que foi lançado${date}`}</span>
                                <img src={popularGame.background_image} alt={popularGame.name}/>
                                <ul className="list">
                                    <p className="title-list">Plataformas disponiveis: </p>
                                    {popularGame.platforms.map(platform =>(
                                        <li key={popularGame.id} className="list-platform">
                                            {platform.platform.name}
                                        </li>

                                    )

                                    )}
                                </ul>
                            </div>
                            </div>
                        </article>
                    )})}
                </div>
            
    
        </div>
        
        
    </div>
)}

export default Home;