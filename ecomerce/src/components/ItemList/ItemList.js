import Item from '../Item/Item'
import { memo } from 'react'
import './ItemList.css'

const ItemList = ({products}) => {
    return (
        <div className='itemlist'>
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
    )
}

export default memo(ItemList, (prevProps, nextProps) => {
    return true
})