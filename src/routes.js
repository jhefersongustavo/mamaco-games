import { Route, Routes,BrowserRouter, Navigate } from "react-router-dom";
import Header from "./componets/Header";
import Home from "./pages/Home/home";
import Cadastro from "./pages/Cadastro";
import Jogo from "./pages/Jogo";

function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
        <Route path="/" element={<Cadastro/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/jogos/:name" element={<Jogo/>}/>



        </Routes>
        
        
        </BrowserRouter>
    )
}

export default RoutesApp;