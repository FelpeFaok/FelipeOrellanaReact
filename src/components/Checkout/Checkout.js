import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { getDocs, addDoc, collection, where, query, documentId, writeBatch } from 'firebase/firestore'
import { db } from '../../services/firebase'
import FormCheckOut from "../Form/FormCheckOut"
import swal from 'sweetalert'

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async () => {
    
        setLoading(true)
        try {
        const objOrder = {
            buyer: {
                name: document.getElementById("floatingInputName").value,
                phone: document.getElementById("floatingInputPhone").value,
                email: document.getElementById("floatingInputEmail").value
            },
            items: cart,
            total
        }
    
            const ids = cart.map(prod => prod.id)
            const productsRef = collection(db, 'products')
    
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in' , ids)))
            const { docs } = productsAddedFromFirestore
    
            const batch = writeBatch(db)
            const outOfStock = []
    
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
    
            if(outOfStock.length === 0) {
                await batch.commit()
    
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)
                swal({ 
                    title: 'Su Orden se a procesado con exito',
                    icon: 'success',
                    text: `El id de su orden es: ${orderAdded.id}`,
                    buttons: 'Cerrar',
                })
                clearCart()
            } else {
                swal({ 
                    title: 'Productos sin Stock',
                    icon: 'warning',
                    buttons: 'Cerrar',
                })
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return (<>
        <h1>Procesado Orden de Compra</h1>
        <picture>
            <img src="https://media.tenor.com/XK37GfbV0g8AAAAi/loading-cargando.gif" ></img>
        </picture>
        </>   
        )
    }

    return (
        <>
            <h1>Checkout</h1>
            <FormCheckOut></FormCheckOut>
            <button className="Button" onClick={createOrder}>Comprar</button>
            
        </>
    )
}

export default Checkout