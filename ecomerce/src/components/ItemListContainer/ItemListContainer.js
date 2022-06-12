import { useState, useEffect } from 'react'
import { getProducts } from '../asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getProductsByCategory } from '../asyncmock'

const ItemLIstContainer = (props) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(() => {
        if (!categoryId) {
            getProducts().then(response => {
                setProducts(response)
            })
        } else {
           getProductsByCategory(categoryId).then(response => {
               setProducts(response)
           }) 
        }
        
    }, [categoryId])

    return (
    
    <div className='ItemListContainer'>
            <h1>{props.greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemLIstContainer