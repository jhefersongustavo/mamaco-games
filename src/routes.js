import { Route, Routes,BrowserRouter, Navigate } from "react-router-dom";
import Header from "./componets/Header";
import Home from "./pages/Home/home";
import Cadastro from "./pages/Cadastro";

function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
        <Route path="/" element={<Cadastro/>}/>
        <Route path="/home" element={<Home/>}/>



        </Routes>
        
        
        </BrowserRouter>
    )
}

export default RoutesApp;