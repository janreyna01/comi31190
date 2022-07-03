import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../Context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import { useNotification } from '../../notification/Notification'

const InputCount = ({ onAdd, stock, initial = 1}) => {
    const [quantity, setQuantity] = useState(initial)


    
    const handleChange = (e) => {
        if(e.target.value <= stock && e.target.value > 0) {
            setQuantity(e.target.value)
        }
    }

    return (
        <div>
            <input type='number' onChange={handleChange} value={quantity}/>
            <button onClick={() => onAdd(quantity)}>Agregar al carrito</button>
        </div>
    )
}
const ItemDetail = ({ id, name, image, category, description, price, stock }) => {

    const [quantity, setQuantity] = useState(0)
    
    

    const { setNotification } = useNotification()

    const { addItem, getProduct } = useContext(CartContext)
    const Count = ItemCount 
    const handleOnAdd = (quantity) => {
        setQuantity(quantity)
        setNotification('success', 'Se agrego correctamente al carrito')
        addItem({ id, name, price, quantity })
    }

    return (
        <article>
            
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={image} alt={name} />
            </picture>
            <section>
                <p>
                    Categoria:{category}
                </p>
                <p>
                    Descripción:{description}
                </p>
                <p>
                    Precio:{price}
                </p>
            </section>
            <footer>
                <Count stock={stock} onAdd={handleOnAdd} initial={getProduct(id)?.quantity} />
            </footer>
        </article>
    )
}

export default ItemDetail