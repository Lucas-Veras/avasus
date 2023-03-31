import { BrowserRouter, Route, Routes } from "react-router-dom";
import ModulosEducacionais from "../pages/modulosEducacionais"
import NavbarScroll from "../components/navbarScroll";
import Transparencia from "../pages/transparencia"
import Parceiros from "../pages/parceiros"
import Footer from "../components/footer";
import Curso from "../pages/curso"
import Home from "../pages/home"

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <NavbarScroll />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/parceiros" element={<Parceiros />} />
                <Route path="/transparencia" element={<Transparencia />} />
                <Route path="/modulosEducacionais" element={<ModulosEducacionais />} />
                <Route path="/modulosEducacionais/:id" element={<Curso />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default RoutesApp;