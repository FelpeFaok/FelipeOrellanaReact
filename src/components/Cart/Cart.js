import './Cart.css'
import { useContext } from "react"
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)  

    if(totalQuantity === 0) {
        return (
            <h1>No hay items en el carrito</h1>
        )
    }

    return (     
        <div>
            <h1>Carrito</h1>
            <div className='CardCartContain'>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            </div>
            <h3>Total: ${total}</h3>
            <div className='botones'>
            <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
            <Link to='/checkout' className='Button'>Finalizar compra</Link>
            </div>
        </div>
    )
}

export default Cart