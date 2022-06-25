import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../Context/CartContext'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, name, image, category, description, price, stock }) => {

    const [quantity, setQuantity] = useState(0)

    const { addItem, getProduct } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantity(quantity)
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
                {quantity > 0
                    ? <Link to='/cart'>Finalizar compra</Link>
                    : <ItemCount stock={stock} onAdd={handleOnAdd} initial={getProduct(id)?.quantity} />}
            </footer>
        </article>
    )
}

export default ItemDetail