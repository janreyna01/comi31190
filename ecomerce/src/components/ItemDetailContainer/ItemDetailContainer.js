import { useState, useEffect } from 'react'
import { getProductsById } from '../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [products, setProducts] = useState()

    const {productId} = useParams()

    useEffect(() => {
        getProductsById(productId).then(response => {
            setProducts(response)
        })
    },)

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...products} />
        </div>
    )
}
export default ItemDetailContainer