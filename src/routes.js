import { Route, Routes,BrowserRouter } from "react-router-dom";
import Header from "./componets/Header";
import Home from "./pages/Home/home";

function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
        <Route path="/" element={<Home/>}/>

        </Routes>
        
        
        </BrowserRouter>
    )
}

export default RoutesApp;