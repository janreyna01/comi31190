import { useState, useEffect } from 'react'
import { getProducts } from '../asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getProductsByCategory } from '../asyncmock'
import './ItemListContainer.css'

const ItemLIstContainer = (props) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [title, setTitle] = useState('')
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        if (!categoryId) {
            getProducts().then(response => {
                setProducts(response)
            }).finally(() => {
                setLoading(false)
            })

        } else {
            getProductsByCategory(categoryId).then(response => {
                setProducts(response)
            }).finally(() => {
                setLoading(false)
            })
        }

    }, [categoryId])

    useEffect(() => {
        setTimeout(() => {
            setTitle('Cambie titulo')
        }, 3000)
    })

    if(loading) {
        return <h1>Loading...</h1>
    }

    return (

        <div className='itemlistcontainer'>
            <h1 className='tituloitemlistcontainer'>{props.greeting}</h1>
            {
               products.length > 0 ? <ItemList products={products}/> : <h2>NO hay Productos</h2> 
            }
        </div>
    )
}

export default ItemLIstContainer