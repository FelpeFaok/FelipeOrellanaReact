import './ItemDetail.css'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'
import swal from 'sweetalert'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityToAdd, setQuantityToAdd] = useState(0)

    const { addItem, getProductQuantity } = useContext(CartContext)


    const handleOnAdd = (quantity) => {
        setQuantityToAdd(quantity)

        const productToAdd = {
            id, name, price, quantity, img  
        }

        addItem(productToAdd)
        if (quantity > 0){
            swal({ 
                title: '¡Producto agregado!',
                text: `Se han agregado ${productToAdd.quantity} de ${productToAdd.name} al carrito`,
                icon: 'success',
                buttons: 'Cerrar',
            })
        }else {
            swal({ 
                title: 'Productos sin Stock',
                icon: 'warning',
                buttons: 'Cerrar',
            })
        }



    }

    const productAddedQuantity = getProductQuantity(id)

    return (
        <>
        <h1>Descripción de {name} </h1>
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: {price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                {
                    quantityToAdd === 0 ? (
                        <ItemCount onAdd={handleOnAdd} stock={stock} initial={productAddedQuantity}/>
                    ) : (
                        <Link to='/cart' className='Button'>Ir al Carrito</Link>
                    )
                }
            </footer>
        </article>
        </>
    )
}

export default ItemDetail