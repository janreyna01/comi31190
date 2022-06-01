import { useState, useEffect } from 'react'
import { getproductos } from '../asyncmock'
import ItemList from '../ItemList/ItemList'

const ItemLIstContainer = (props) => {
    const [productos, setProducts] = useState([])

    useEffect(() => {
        getproductos().then(response => {
            setProducts(response)
        })
    }, [])

    return (
    
    <div className='ItemListContainer'>
            <h1>{props.greeting}</h1>
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemLIstContainer