import './ItemListContainer.css'
import { useState, useEffect, useContext } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom' 
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase'
import swal from 'sweetalert'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)


    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId 
                ? query(collection(db, 'products'), where('category', '==', categoryId))
                : collection(db, 'products')
  

        getDocs(collectionRef).then(response => {
            console.log(response)

            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data}
            })

            setProducts(productsAdapted)
        })
        .catch(error => {
            swal({ 
            title: '¡No se encontraron los productos!',
            icon: 'error',
            buttons: 'Cerrar',
        })
        })
        .finally(() => {
            setLoading(false)
        })
    }, [categoryId])

    if(loading && true) {
        return (
        <>
         <h1>Cargando productos...</h1>
        <picture>
        <img src="https://media.tenor.com/XK37GfbV0g8AAAAi/loading-cargando.gif" ></img>
        </picture>
        </>)
        }

    return (
        <div>
            <h1>{`${greeting} ${categoryId || ''}`}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer