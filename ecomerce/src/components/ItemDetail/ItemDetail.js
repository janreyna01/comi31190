import { useState } from 'react'
import { Link } from 'react-router-dom'


const ButtonCount = ({ onConfirm, stock, initial = 0 }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }

    }

    const decrement = () => {
            setCount(count - 1)

    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}

const ItemDetail = ({id, name, image, category, description, price, stock }) => {
    
    const [quantity, setQuantity] = useState(0)

    

    const handleOnAdd = (count) => {
        setQuantity(count)
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
            <footer >
                { quantity > 0  ? <Link to='/cart'>Finalizar compra</Link> : <ButtonCount    stock={stock} onConfirm={handleOnAdd}/>}
            </footer>
        </article>
    )
}

export default ItemDetail