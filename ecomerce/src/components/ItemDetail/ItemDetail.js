import { useState } from 'react'
import { Link } from 'react-router-dom'


const InputCount = ({ onConfirm, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial)

    const handleChange = (e) => {
        if (e.target.value <= stock) {
            setCount(e.target.value)
        }
    }

    return (
        <div>
            <input type='number' onChange={handleChange} value={count} />
            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}

const ButtonCount = ({ onConfirm, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if (count < stock) {
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

const ItemDetail = ({ id, name, image, category, description, price, stock }) => {
    const [inputType, setInputType] = useState('input')
    const [quantity, setQuantity] = useState(0)

    const ItemCount = inputType === 'input' ? InputCount : ButtonCount

    const handleOnAdd = (count) => {
        setQuantity(count)
    }

    return (
        <article className="CardItem">
            <button onClick={() => setInputType(inputType === 'input' ? 'button' : 'input')}>
                Cambiar contador
            </button>
            <h2 className="ItemHeader">
                {name}
            </h2>
            <img src={image} alt={name} className="ItemImg" />
            <p className="Info">
                Categoria: {category}
            </p>
            <p className="Info">
                Descripción: {description}
            </p>
            <p className="Info">
                Precio: {price}
            </p>
            {quantity > 0 ? <Link to='/cart'>Finalizar compra</Link> : <ItemCount stock={stock} onConfirm={handleOnAdd} />}
        </article>
    )
}

export default ItemDetail