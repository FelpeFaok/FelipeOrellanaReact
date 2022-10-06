import { Link } from "react-router-dom"

const ItemList = ({ products }) => {
    return (
        <ul style={{display: 'flex', flexDirection: 'column'}}>
            { products.map(product => <Link to={`/detail/${product.id}`} key={product.id}>{product.name}</Link>) }
        </ul>
    )
}

export default ItemList