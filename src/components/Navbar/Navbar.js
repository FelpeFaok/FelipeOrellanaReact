import "./Navbar.css"
import "../CartWidget/CartWidget"
import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return (
        <nav id="navbar">
            <div>
                <h1>INCROSTORE</h1>
            </div>
            <ul>
                <li><a href="">Inicio</a></li>
                <li><a href="">Productos</a></li>
                <li><a href="">Nosotros</a></li>
                <li><a href="">Contacto</a></li>
                <li><a href="">Registrar</a></li>
            </ul>
            <div>
            <CartWidget/>
            </div>
        </nav>
    )

}

export default Navbar