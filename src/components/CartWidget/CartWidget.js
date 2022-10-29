import cart from "./assets/carrito.png"
import "./Carrito.css"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext.js'

const CartWidget = () => {

    const { getTotalQuantity } = useContext(CartContext)

    const totalQuantity = getTotalQuantity()

    return(
        <Link to='/cart' className="CartWidget">
            <img src={cart} alt='cart-widget' className='CartImg'/>
            {totalQuantity}
        </Link>
    );
}

export default CartWidget