import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div >
                <Link  to="/">
                    <h1 id='asd'>INCROSTORE</h1>
                </Link>
            </div>
            <ul>
                <li><Link to="/category/accesorio" className="Option">Accesorio</Link></li>
                <li><Link to="/category/gpu" className="Option">Gpu</Link></li>
                <li><Link to="/category/monitor" className="Option">Monitor</Link></li>
            </ul>
            <CartWidget/>
        </nav>
    )

}

export default Navbar
